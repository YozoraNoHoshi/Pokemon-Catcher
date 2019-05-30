import React, { memo } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import { Habitat } from '../../../types';
import { title } from '../../../helpers/title';
import useHabitats from '../../hooks/useHabitats';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import Loading from '../../atoms/Loading';
import HabitatInfo from '../../molecules/HabitatInfo';

interface Props extends RouteComponentProps {
  currentHabitat: string;
  changeHabitat: (selectedHabitat: string) => void;
}

function HabitatMenu(props: Props): JSX.Element {
  const {
    loading,
    habitats,
    selectedHabitat,
    habitatPokemon,
    handleClick
  } = useHabitats(props.currentHabitat);
  let habitat = habitats[selectedHabitat];

  const changeHabitat = () => {
    if (selectedHabitat !== props.currentHabitat) {
      props.changeHabitat(selectedHabitat);
    }
    navigate('/');
  };

  const renderedHabitats = Object.values(habitats).map((h: Habitat) => (
    <MenuButton
      key={h.name}
      id={h.name}
      active={h.name === selectedHabitat}
      cWidth={20}
    >
      {title(h.name)}
    </MenuButton>
  ));

  return (
    <Flex column>
      <Flex large txCenter>
        Transit Center
      </Flex>
      <Flex medium txCenter>
        Where would you like to go?
      </Flex>
      <MenuButton
        onClick={changeHabitat}
        active={props.currentHabitat === selectedHabitat}
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: '20px'
        }}
      >
        {props.currentHabitat === selectedHabitat ? 'Stay here!' : 'Go!'}
      </MenuButton>
      {!loading ? (
        <Flex
          row
          jCenter
          onClick={handleClick}
          style={{
            borderBottom: '1px solid black'
          }}
        >
          {renderedHabitats}
        </Flex>
      ) : (
        <Loading />
      )}
      {!loading && habitat ? (
        <HabitatInfo
          name={habitat.name}
          description={habitat.description}
          pokemon={habitatPokemon}
        />
      ) : (
        <Loading />
      )}
    </Flex>
  );
}

HabitatMenu.defaultProps = {
  currentHabitat: '',
  changeHabitat: console.log
};

export default memo(HabitatMenu);
