import React, { PureComponent } from 'react';
import Flex from '../Flex';
import styled from 'styled-components';
import Sprite from '../Sprite';
import { Link } from '@reach/router';

export const StyledCard = styled.div`
  background: lightslategray;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  padding: 10px;
  padding-bottom: 5px;
  height: 100px;
  width: 80px;
  :hover {
    background-color: lightsteelblue;
  }
  & > div {
    pointer-events: none;
  }
`;

class Card extends PureComponent {
  render() {
    return this.props.noLink ? (
      <StyledCard>
        <Sprite src={this.props.sprite} alt={this.props.name} />
        <Flex jCenter txCenter>
          {this.props.name}
        </Flex>
      </StyledCard>
    ) : (
      <Link
        to={`/pokedex/${this.props.name.toLowerCase()}`}
        state={this.props.passedState || null}
        style={{
          color: 'initial',
          margin: '5px',
          padding: 0
        }}
      >
        <StyledCard>
          <Sprite src={this.props.sprite} alt={this.props.name} />
          <Flex jCenter txCenter>
            {this.props.name}
          </Flex>
        </StyledCard>
      </Link>
    );
  }
}

Card.defaultProps = {
  noLink: false,
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  name: 'MissingNo.'
};

export default Card;
