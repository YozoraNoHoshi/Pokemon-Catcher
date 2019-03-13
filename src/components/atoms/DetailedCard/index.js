import React, { PureComponent } from 'react';
import Text from '../Text';
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
        <Text center large>
          #{pokemon.id}: {pokemon.species}
        </Text>
        <Text center>{pokemon.title}</Text>
        <Sprite src={pokemon.sprite} alt="" />
        <Text left cWidth="50ch">
          {pokemon.flavor_text}
        </Text>
        <Text center>Catch Rate: {pokemon.catch_rate}</Text>
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
