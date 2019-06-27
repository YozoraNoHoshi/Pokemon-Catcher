import { useState, useCallback } from 'react';
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
  BerryIndex
} from '../../../types';

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
  const [caught, setCaught] = useState(false);
  const [battleStatus, setBattleStatus] = useState('active');
  const [message, setMessage] = useState(`A wild ${pokemon.species} appeared!`);
  const [turns, setTurns] = useState(0);
  const [statusDuration, setStatusDuraton] = useState(0);

  const selectBerry = (berry: BerryIndex): void => {
    if (BERRIES.hasOwnProperty(berry)) setSelectedBerry(berry);
  };

  const selectPokeball = (pokeball: PokeballIndex): void => {
    if (POKEBALLS.hasOwnProperty(pokeball)) setPokeball(pokeball);
  };

  const pokemonTurn = (triggeringAction: BerryIndex | PokeballIndex): void => {
    // This function should fire after useBerry or throwPokeball, IFF throwPokeball fails to catch pokemon.
    if (POKEBALLS.hasOwnProperty(triggeringAction)) {
      // Pokemon has a chance to regain some health, or possibly run away
      let runChance = turns / 1;
      let runRoll = Math.random();
      if (runRoll < runChance) {
        // Pokemon flees
        setBattleStatus('flee');
        setMessage('Oh no! The Pokemon fled!');
      } else {
        setHPPercent(hp => hp + 0.1);
      }
      // For each pokeball, increase the run probability by up to 5%, depending on the catch multiplier
      // Make a run check, if the check fails then pokemon escapes and you are kicked back to home screen
      // If run check passes, then randomly add a hp percent from .01 - 5%.
    } else {
      // If berry is hp altering berry, chance to recover from status effect
      // Percentage based on the status multiplier - if it is a hard status then the chance is larger
      // Chance to recover increases every turn
      // if berry is status inflicting berry, do nothing
    }
    setTurns(t => t + 1);
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

  const resultOfCatch = (result: number): void => {
    // Catch successful
    if (result === 4) {
      cb({
        ...pokemon,
        pokeball
      });
      // setCaught(true);
      setBattleStatus('caught');
    }
    setMessage(CATCH_MESSAGES[result]);
    if (result !== 4) {
      pokemonTurn(pokeball);
    }
  };

  const throwPokeball = (): void => {
    let result = determineCatchResult(
      pokemon.catch_rate,
      pokeball,
      status,
      hpPercent
    );
    resultOfCatch(result);
  };

  return {
    pokeball,
    status,
    selectedBerry,
    hpPercent,
    caught,
    message,
    selectBerry,
    battleStatus,
    selectPokeball,
    useBerry,
    throwPokeball
  };
}
