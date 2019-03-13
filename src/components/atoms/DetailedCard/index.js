import React, { PureComponent } from 'react';
import Flex from '../Flex';
import Sprite from '../Sprite';
import styled from 'styled-components';

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightslategray;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  padding: 10px;
  margin: 5px;
  padding-bottom: 5px;
`;

class DetailedCard extends PureComponent {
  render() {
    let pokemon = this.props;
    return (
      <DetailCard>
        <Flex txCenter large>
          #{pokemon.id}: {pokemon.species}
        </Flex>
        <Flex center>{pokemon.title}</Flex>
        <Sprite src={pokemon.sprite} alt="" />
        <Flex txLeft cWidth="50ch">
          {pokemon.flavor_text}
        </Flex>
        <Flex txCenter>Catch Rate: {pokemon.catch_rate}</Flex>
      </DetailCard>
    );
  }
}

DetailedCard.defaultProps = {
  id: '???',
  species: 'MissingNo.',
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  title: '????',
  flavor_text: '',
  catch_rate: '???'
};

DetailedCard.propTypes = {};

export default DetailedCard;
