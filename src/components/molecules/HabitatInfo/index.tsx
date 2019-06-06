import React, { memo } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import { Pokemon } from '../../../types';

interface Props {
  name: string;
  image?: string;
  description: string;
  pokemon: Pokemon[];
}

function HabitatInfo(props: Props): JSX.Element {
  const pokemonCards = props.pokemon.map(p => (
    <Card
      key={`${p.name}`}
      name={p.name}
      species={p.species}
      sprite={p.sprite}
    />
  ));

  return (
    <Flex column alCenter style={{ marginTop: '20px', marginBottom: '15px' }}>
      <Flex large txCenter>
        {title(props.name)}
      </Flex>
      {props.image && <img src={props.image} alt="" />}
      <Flex txCenter>{props.description}</Flex>
      <Flex
        row
        jCenter
        fWrap
        style={{ overflowY: 'auto', height: '55vh', marginTop: '5px' }}
      >
        {pokemonCards}
      </Flex>
    </Flex>
  );
}

HabitatInfo.defaultProps = {
  pokemon: [{}],
  description:
    'A quiet place with a lot of nothing. Sometimes you can see flicks of... something.',
  name: 'Empty Space'
};

export default memo(HabitatInfo);
