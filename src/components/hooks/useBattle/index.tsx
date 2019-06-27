import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import determineCatchResult from '../../../helpers/determineCatchResult';
import hpPercentageMessage from '../../../helpers/hpPercentageMessage';
import { CATCH_MESSAGES, POKEBALLS, BERRIES, HP_BERRIES } from '../../../data';
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
import calcFleeRate from '../../../helpers/calcFleeRate';

export default function useBattle(
  pokemon: Pokemon,
  cb: (CaughtPokemon: CaughtPokemon) => void
) {
  const [pokeball, setPokeball] = useState('poke-ball' as PokeballIndex);
  const [status, setStatus] = useState('normal' as StatusIndex);
  const [selectedBerry, setSelectedBerry] = useState(
    'oran-berry' as BerryIndex
  );
  const [hpPercent, setHPPercent] = useState(1);
  const [battleStatus, setBattleStatus] = useState('active' as BattleStates);
  const [message, setMessage] = useState(`A wild ${pokemon.species} appeared!`);
  const [statusDuration, setStatusDuraton] = useState(0);
  const [fleeRate, setFleeRate] = useState(0);
  const [turns, setTurns]: [
    [number, number],
    Dispatch<SetStateAction<[number, number]>>
  ] = useState([0, 0]);

  const selectBerry = (berry: BerryIndex): void => {
    if (BERRIES.hasOwnProperty(berry)) setSelectedBerry(berry);
  };

  const selectPokeball = (pokeball: PokeballIndex): void => {
    if (POKEBALLS.hasOwnProperty(pokeball)) setPokeball(pokeball);
  };

  const pokemonTurn = (triggeringAction: BerryIndex | PokeballIndex): void => {
    // This function should fire after useBerry or throwPokeball, IFF throwPokeball fails to catch pokemon.
    if (POKEBALLS.hasOwnProperty(triggeringAction)) {
      let runRoll = Math.random();
      if (runRoll < fleeRate) {
        setBattleStatus('flee');
        setMessage('Oh no! The wild Pokemon got away!');
      } else {
        let runChance = calcFleeRate(pokemon.catch_rate, turns, fleeRate);
        setFleeRate(runChance);
        let addedHP = Math.floor(Math.random() * 10) / 100;
        setHPPercent(hp => hp + addedHP);
      }
    } else {
      // If berry is hp altering berry, chance to recover from status effect
      // Percentage based on the status multiplier - if it is a hard status then the chance is larger
      // Chance to recover increases every turn
      // if berry is status inflicting berry, do nothing
    }
    setTurns(t => [t[0] + 1, t[1] + 1]);
    if (status !== 'normal') {
      setStatusDuraton(s => s + 1);
    }
  };

  const useBerry = useCallback((): void => {
    if (BERRIES.hasOwnProperty(selectedBerry)) {
      let berryEffect = BERRIES[selectedBerry as CatchBerriesIndex];
      // Message needs to be changed
      let newMessage: string =
        selectedBerry === 'oran-berry'
          ? `The ${pokemon.species} returned to normal!`
          : `The ${
              pokemon.species
            } ate the berry and had ${berryEffect} inflicted!`;
      setMessage(newMessage);
      setStatus(berryEffect);
    } else if (HP_BERRIES.hasOwnProperty(selectedBerry)) {
      // Affects HP - Razz Berry and the other Berries from Lets Go!
      // Pokemon faints if berry brings it below 0? NYI
      let berryEffect = HP_BERRIES[selectedBerry as HPBerriesIndex];
      let newHPPercent = Math.max(hpPercent - berryEffect, 0.1);
      let newMessage = `The ${
        pokemon.species
      } ate the berry! It looks ${hpPercentageMessage(newHPPercent)}...`;
      setHPPercent(newHPPercent);
      setMessage(newMessage);
    }
  }, [selectedBerry, hpPercent, pokemon]);

  const throwPokeball = (): void => {
    let result = determineCatchResult(
      pokemon.catch_rate,
      pokeball,
      status,
      hpPercent
    );

    setMessage(CATCH_MESSAGES[result]);
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
    message,
    battleStatus,
    hpPercent,
    status,
    statusDuration,
    selectedBerry,
    selectBerry,
    useBerry,
    pokeball,
    selectPokeball,
    throwPokeball
  };
}
