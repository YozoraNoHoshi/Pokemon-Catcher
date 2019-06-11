import React, { memo } from 'react';
import styled from 'styled-components';
import { PokemonWithHabitat } from '../../../types';
import Flex from '../Flex';
import Sprite from '../Sprite';
import MessageBox from '../MessageBox';

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
  & > div > div {
    & > i {
      font-style: italic;
    }
  }
`;

function DetailedCard(props: PokemonWithHabitat): JSX.Element {
  return (
    <DetailCard>
      <Flex row jCenter cWidth={100}>
        <Sprite sHeight={100} src={props.sprite} />
        <Flex column alStart jCenter cWidth={100}>
          <Flex>
            No. {props.id}: {props.species}
          </Flex>

          <i>{props.title}</i>
          <Flex small>Catch Rate: {props.catch_rate}</Flex>
          <Flex small>Areas: {props.habitats}</Flex>
        </Flex>
      </Flex>
      <MessageBox>{props.flavor_text}</MessageBox>
    </DetailCard>
  );
}

DetailedCard.defaultProps = {
  id: '???',
  species: 'MissingNo.',
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  title: '????',
  flavor_text: '',
  catch_rate: '???',
  habitats: ''
};

export default memo(DetailedCard);
