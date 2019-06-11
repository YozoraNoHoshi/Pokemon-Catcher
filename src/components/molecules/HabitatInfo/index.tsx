import React, { memo } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import { Pokemon } from '../../../types';
import styled from 'styled-components';

const MarginYFlex = styled(Flex)`
  margin: 20px unset;
  & > section {
    overflow-y: auto;
    height: 55vh;
    margin-top: 5px;
  }
`;

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
    <MarginYFlex column alCenter>
      <Flex large txCenter>
        {title(props.name)}
      </Flex>
      {props.image && <img src={props.image} alt="" />}
      <Flex txCenter>{props.description}</Flex>
      <Flex as="section" row jCenter fWrap>
        {pokemonCards}
      </Flex>
    </MarginYFlex>
  );
}

HabitatInfo.defaultProps = {
  pokemon: [{}],
  description:
    'A quiet place with a lot of nothing. Sometimes you can see flicks of... something.',
  name: 'Empty Space'
};

export default memo(HabitatInfo);
