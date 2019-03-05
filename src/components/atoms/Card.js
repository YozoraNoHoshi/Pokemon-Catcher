import React, { PureComponent } from 'react';
import Flex from './Flex';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: lightslategray;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  padding: 10px;
  margin: 5px;
  padding-bottom: 5px;
  height: 100px;
`;

class Card extends PureComponent {
  render() {
    return (
      // <Flex column jCenter alCenter>
      <StyledCard>
        <img
          src={this.props.sprite}
          alt={this.props.name}
          style={{ objectFit: 'contain', height: '75%' }}
        />
        <Flex jCenter txCenter>
          {this.props.name}
        </Flex>
      </StyledCard>
      // </Flex>
    );
  }
}

Card.defaultProps = {
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  name: 'MissingNo.'
};

export default Card;

// pokemon card, maybe take the structure from Pokedex app

/* 


.card-slot.flip .card,
.card-slot.matched .card {
  transform: rotateY(180deg);
}
.card-slot,
.card-front,
.card-back-black,
.card-back-red {
  width: 77px;
  height: 108px;
}
.card {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.card-front,
.card-back-black,
.card-back-red {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
}
.card-front {
  z-index: 2;
  transform: rotateY(0deg);
  background: url('assets/cardback.png');
  background-size: cover;
}
.card-back-black,
.card-back-red {
  transform: rotateY(-180deg);
}
.card-back-black {
  background: url('assets/cardspade.png');
  background-size: cover;
  color: black;
}
.card-back-red {
  background: url('assets/cardheart.png');
  background-size: cover;
  color: red;
}

.kado-text,
.kado-br-text {
  position: absolute;
  text-align: center;
  font-size: 1.5em;
}

.kado-text {
  top: 0px;
}
.kado-br-text {
  bottom: 0px;
  right: 0px;
}
*/
