import { useState, useCallback } from 'react';
import determineCatchResult from '../../../helpers/determineCatchResult';
import hpPercentageMessage from '../../../helpers/hpPercentageMessage';
import { CATCH_MESSAGES, POKEBALLS, BERRIES, HP_BERRIES } from '../../../data';
import {
  Pokemon,
  CaughtPokemon,
  CatchBerries,
  HPBerries,
  Status,
  PokeballIndex
} from '../../..';

function useBattle(
  pokemon: Pokemon,
  cb: (CaughtPokemon: CaughtPokemon) => void
) {
  const [pokeball, setPokeball] = useState('poke-ball' as PokeballIndex);
  const [status, setStatus] = useState('normal');
  const [selectedBerry, setSelectedBerry] = useState('oran-berry');
  const [hpPercent, setHPPercent] = useState(1);
  const [caught, setCaught] = useState(false);
  const [message, setMessage] = useState(`A wild ${pokemon.species} appeared!`);

  const selectBerry = (berry: string) => {
    if (BERRIES.hasOwnProperty(berry)) setSelectedBerry(berry);
  };
  const selectPokeball = (pokeball: PokeballIndex) => {
    if (POKEBALLS.hasOwnProperty(pokeball)) setPokeball(pokeball);
  };

  const useBerry = useCallback(() => {
    let berry: string = selectedBerry;
    if (BERRIES.hasOwnProperty(berry)) {
      let berryEffect = BERRIES[berry as keyof CatchBerries];
      // Message needs to be changed
      let newMessage: string =
        berry === 'oran-berry'
          ? `The ${pokemon.species} returned to normal!`
          : `The ${
              pokemon.species
            } ate the berry and had ${berryEffect} inflicted!`;
      setMessage(newMessage);
      setStatus(berryEffect);
    } else if (HP_BERRIES.hasOwnProperty(berry)) {
      // Affects HP - Razz Berry and the other Berries from Lets Go!
      // Pokemon faints if berry brings it below 0? NYI
      let berryEffect = HP_BERRIES[berry as keyof HPBerries];
      let newHPPercent = Math.max(hpPercent - berryEffect, 0.1);
      let newMessage = `The ${
        pokemon.species
      } ate the berry! It looks ${hpPercentageMessage(newHPPercent)}...`;
      setHPPercent(newHPPercent);
      setMessage(newMessage);
    }
  }, [selectedBerry, hpPercent, pokemon]);

  const resultOfCatch = (result: number) => {
    // Catch successful
    if (result === 4) {
      cb({
        ...pokemon,
        pokeball
      });
      setCaught(true);
      setMessage(CATCH_MESSAGES[result]);
    }
    // Catch fails
    else {
      setMessage(CATCH_MESSAGES[result]);
    }
  };

  const throwPokeball = () => {
    let result = determineCatchResult(
      pokemon.catch_rate,
      pokeball,
      status as keyof Status,
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
    selectPokeball,
    useBerry,
    throwPokeball
  };
}

export default useBattle;
