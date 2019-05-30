import React, { memo, HTMLAttributes } from 'react';
import Flex from '../Flex';
import styled from 'styled-components';
import Sprite from '../Sprite';

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

function Card(props: Props & HTMLAttributes<HTMLDivElement>): JSX.Element {
  return props.noLink ? (
    <StyledCard className={props.className} onClick={props.click}>
      <Sprite src={props.sprite} alt={props.name} />
      <Flex jCenter txCenter>
        {props.species}
      </Flex>
    </StyledCard>
  ) : (
    <StyledCard style={{ margin: '5px' }} className={props.className}>
      <Sprite src={props.sprite} alt={props.name} />
      <Flex jCenter txCenter>
        {props.species}
      </Flex>
      {props.pokeball && (
        <div className="pokeball">
          <Sprite src={props.pokeball} />
        </div>
      )}
    </StyledCard>
  );
}

Card.defaultProps = {
  click: () => {},
  noLink: false,
  pokeball: '',
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  name: 'missingno',
  species: 'MissingNo.'
};

export default memo(Card);
