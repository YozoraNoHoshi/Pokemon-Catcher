import React, { PureComponent } from 'react';
import Flex from '../Flex';
import Sprite from '../Sprite';
import styled from 'styled-components';
import MessageBox from '../MessageBox';
import { Pokemon } from '../../..';

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: silver;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  padding: 10px;
  margin: 5px;
  width: 325px;
  padding-bottom: 5px;
`;

interface State {}

class DetailedCard extends PureComponent<
  Pokemon & { habitats: string },
  State
> {
  static defaultProps: Pokemon | { habitats: string; id: number | string } = {
    id: '???',
    species: 'MissingNo.',
    sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
    title: '????',
    flavor_text: '',
    catch_rate: '???',
    habitats: ''
  };
  render() {
    let pokemon = this.props;
    if (pokemon.id)
      return (
        <DetailCard>
          <Flex row jCenter cWidth={100}>
            <Sprite sHeight={100} src={pokemon.sprite} />
            <Flex column alStart jCenter cWidth={100}>
              <Flex medium row jStart cWidth={100}>
                <Flex>No. {pokemon.id}</Flex>
                <Flex style={{ marginLeft: '3%' }}>{pokemon.species}</Flex>
              </Flex>
              <Flex style={{ fontStyle: 'italic' }}>{pokemon.title}</Flex>
              <Flex small>Catch Rate: {pokemon.catch_rate}</Flex>
              <Flex small>Areas: {pokemon.habitats}</Flex>
            </Flex>
          </Flex>
          <MessageBox>{pokemon.flavor_text}</MessageBox>
        </DetailCard>
      );
  }
}

export default DetailedCard;
