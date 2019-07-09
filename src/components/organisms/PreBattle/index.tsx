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

type LoadingTypes = 'loading' | 'not-found' | 'success';

const errorMessage =
  'The Pal Park is currently closed for maintenance. We apologize for the inconvenience.';

function PreBattle(props: Props): JSX.Element {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [loadState, setLoadState] = useState('loading' as LoadingTypes);

  useEffect(() => {
    (async function() {
      try {
        setLoadState('loading');
        let pokemon = props.riggedPokemon
          ? await getPokemon(props.riggedPokemon)
          : await getBattlePokemon(props.habitat);
        setPokemon(pokemon);
        setLoadState('success');
      } catch (error) {
        setLoadState('not-found');
      }
    })();
  }, [props.riggedPokemon, props.habitat]);

  if (loadState === 'loading') return <Loading />;
  if (loadState === 'not-found')
    return <PalParkClosed message={errorMessage} />;
  return <Battle pokemon={pokemon} modifyPokemon={props.modifyPokemon} />;
}

PreBattle.defaultProps = { habitat: '', riggedPokemon: '' };

export default memo(PreBattle);
