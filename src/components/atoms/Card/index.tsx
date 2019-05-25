import React, { PureComponent, HTMLAttributes } from 'react';
import Flex from '../Flex';
import styled from 'styled-components';
import Sprite from '../Sprite';
import { emptyFunc } from '../../../helpers/emptyFunc';

export const StyledCard = styled.div`
  position: relative;
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
  & > .pokeball {
    position: absolute;
    left: 0;
    top: 0;
  }
`;
interface Props {
  noLink?: boolean;
  click?: (evt: any) => any;
  pokeball?: string;
  sprite?: string;
  name?: string;
  species?: string;
}

interface State {}

class Card extends PureComponent<
  Props & HTMLAttributes<HTMLDivElement>,
  State
> {
  static defaultProps: Props = {
    click: emptyFunc,
    noLink: false,
    pokeball: '',
    sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
    name: 'missingno',
    species: 'MissingNo.'
  };

  render() {
    return this.props.noLink ? (
      <StyledCard className={this.props.className} onClick={this.props.click}>
        <Sprite src={this.props.sprite} alt={this.props.name} />
        <Flex jCenter txCenter>
          {this.props.species}
        </Flex>
      </StyledCard>
    ) : (
      <StyledCard style={{ margin: '5px' }} className={this.props.className}>
        <Sprite src={this.props.sprite} alt={this.props.name} />
        <Flex jCenter txCenter>
          {this.props.species}
        </Flex>
        {this.props.pokeball && (
          <div className="pokeball">
            <Sprite src={this.props.pokeball} />
          </div>
        )}
      </StyledCard>
    );
  }
}

export default Card;
