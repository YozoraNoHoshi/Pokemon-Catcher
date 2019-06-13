import React, { useState, useEffect, memo } from 'react';
import { Pokemon } from '../../../types';
import { RouteComponentProps } from '@reach/router';
import Loading from '../../atoms/Loading';
import Battle from '../../pages/Battle';
import { getBattlePokemon, getPokemon } from '../../../api';
import PalParkClosed from '../../molecules/PalParkClosed';

interface Props extends RouteComponentProps {
  habitat: string;
  riggedPokemon?: string;
  modifyPokemon: (pokemon: Pokemon | string | number) => void;
}

const errorMessage =
  'The Pal Park is currently closed for maintenance. We apologize for the inconvenience.';

function PreBattle(props: Props): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [noPokemon, setNoPokemon] = useState(false);

  useEffect(() => {
    (async function() {
      try {
        let pokemon = props.riggedPokemon
          ? await getPokemon(props.riggedPokemon)
          : await getBattlePokemon(props.habitat);
        setPokemon(pokemon);
        setNoPokemon(false);
        setLoading(false);
      } catch (error) {
        setNoPokemon(true);
        setLoading(false);
      }
    })();
  }, [props.riggedPokemon, props.habitat]);

  if (loading) return <Loading />;
  if (noPokemon) return <PalParkClosed message={errorMessage} />;
  return <Battle pokemon={pokemon} modifyPokemon={props.modifyPokemon} />;
}

PreBattle.defaultProps = { habitat: '', riggedPokemon: '' };

export default memo(PreBattle);
