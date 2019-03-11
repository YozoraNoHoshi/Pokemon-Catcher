import React, { PureComponent } from 'react';
import Flex from './Flex';
import styled from 'styled-components';
import Sprite from './Sprite';

export const StyledCard = styled.div`
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
      <StyledCard>
        <Sprite src={this.props.sprite} alt={this.props.name} />
        <Flex jCenter txCenter>
          {this.props.name}
        </Flex>
      </StyledCard>
    );
  }
}

Card.defaultProps = {
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  name: 'MissingNo.'
};

export default Card;
