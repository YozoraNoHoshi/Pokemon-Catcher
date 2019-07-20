import { useState, useCallback, useRef } from 'react';
import {
  CATCH_MESSAGES,
  POKEBALLS,
  BERRIES,
  HP_BERRIES,
  statusMultiplier
} from '../../../data';
import {
  Pokemon,
  CaughtPokemon,
  PokeballIndex,
  HPBerriesIndex,
  CatchBerriesIndex,
  StatusIndex,
  BerryIndex,
  BattleStates
} from '../../../types';
import determineCatchResult from '../../../helpers/determineCatchResult';
import hpPercentageMessage from '../../../helpers/hpPercentageMessage';
import calcFleeRate from '../../../helpers/calcFleeRate';
import getStatusDuration from '../../../helpers/getStatusDuration';
import addMessage from '../../../helpers/addMessage';

export default function useBattle(
  pokemon: Pokemon,
  cb: (CaughtPokemon: CaughtPokemon) => void
) {
  const [pokeball, setPokeball] = useState('poke-ball' as PokeballIndex);
  const [status, setStatus] = useState('normal' as StatusIndex);
  const [battleStatus, setBattleStatus] = useState('active' as BattleStates);
  const [selectedBerry, setSelectedBerry] = useState(
    'oran-berry' as BerryIndex
  );
  const [hpPercent, setHPPercent] = useState(1);
  const [messages, setMessages] = useState([
    `A wild ${pokemon.species} appeared!`
  ]);
  const [fleeRate, setFleeRate] = useState(0);

  const elapsedTurns = useRef(0);
  const relativeTurns = useRef(0);
  const statusDuration = useRef(0);
  const maxStatusDuration = useRef(0);

  const selectBerry = (berry: BerryIndex): void => {
    if (BERRIES.hasOwnProperty(berry)) setSelectedBerry(berry);
  };

  const selectPokeball = (pokeball: PokeballIndex): void => {
    if (POKEBALLS.hasOwnProperty(pokeball)) setPokeball(pokeball);
  };

  const pokemonTurn = (triggeringAction: BerryIndex | PokeballIndex): void => {
    if (POKEBALLS.hasOwnProperty(triggeringAction)) {
      let runRoll = Math.random() * 100;
      if (runRoll < fleeRate) {
        setBattleStatus('flee');
        setMessages(addMessage('Oh no! The wild Pokemon got away!'));
        return;
      } else if (Math.random() < 0.25) {
        let runChance = calcFleeRate(
          pokemon.catch_rate,
          elapsedTurns.current,
          relativeTurns.current,
          fleeRate
        );
        setFleeRate(runChance);
      } else if (Math.random() < 0.5) {
        let addedHP = Math.floor(Math.random() * 10) / 100;
        setHPPercent(hp => hp + addedHP);
      }
    }

    if (
      status !== 'normal' &&
      statusDuration.current > maxStatusDuration.current
    ) {
      statusDuration.current = 0;
      maxStatusDuration.current = 0;
      setMessages(
        addMessage(`The wild ${pokemon.species} recovered from ${status}!`)
      );
      setStatus('normal');
    } else statusDuration.current += 1;

    elapsedTurns.current += 1;
    relativeTurns.current += 1;
  };

  const useBerry = useCallback((): void => {
    if (BERRIES.hasOwnProperty(selectedBerry)) {
      let berryEffect = BERRIES[selectedBerry as CatchBerriesIndex];
      let newMessage: string =
        selectedBerry === 'oran-berry'
          ? `The wild ${pokemon.species} returned to normal!`
          : `The wild ${
              pokemon.species
            } ate the berry and had ${berryEffect} inflicted!`;
      setMessages(addMessage(newMessage));
      setStatus(berryEffect);
      maxStatusDuration.current = getStatusDuration(statusMultiplier[status]);
    } else if (HP_BERRIES.hasOwnProperty(selectedBerry)) {
      let berryEffect = HP_BERRIES[selectedBerry as HPBerriesIndex];
      let newHPPercent = hpPercent - berryEffect;

      if (newHPPercent < 0) {
        setMessages(addMessage(`The wild ${pokemon.species} fainted!`));
        setBattleStatus('fainted');
        setHPPercent(0);
      } else {
        let newMessage = `The ${
          pokemon.species
        } ate the berry! It looks ${hpPercentageMessage(newHPPercent)}...`;
        setHPPercent(newHPPercent);
        setMessages(addMessage(newMessage));
      }
    }
  }, [selectedBerry, hpPercent, pokemon]);

  const throwPokeball = (): void => {
    let result = determineCatchResult(
      pokemon.catch_rate,
      pokeball,
      status,
      hpPercent
    );

    setMessages(addMessage(CATCH_MESSAGES[result]));

    if (result === 4) {
      cb({
        ...pokemon,
        pokeball
      });
      setBattleStatus('caught');
    } else {
      pokemonTurn(pokeball);
    }
  };

  return {
    messages,
    battleStatus,
    hpPercent,
    status,
    fleeRate,
    selectedBerry,
    selectBerry,
    useBerry,
    pokeball,
    selectPokeball,
    throwPokeball
  };
}
