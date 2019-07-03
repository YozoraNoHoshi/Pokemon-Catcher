import React, { memo } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { title } from '../../../helpers/title';

interface StatusProps {
  hp: number;
}

const height = 15;
const Status: StyledComponent<'div', any, StatusProps, never> = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 5px 0 5px;
  padding: 5px;
  border: 2px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 1px grey;

  & > div.status-display {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div {
      font-size: 0.75em;
      width: 66%;
    }
    & > p {
      margin: 0;
      padding: 0;
      font-size: 0.75em;
      text-align: right;
      padding-right: 5%;
    }
  }

  & > div.health-display {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      border-radius: ${height / 2}px;
      border: 1px solid lightslategray;
      width: 150px;
      margin-left: 5px;
      position: relative;
      & > label {
        position: absolute;
      }
      & > div.hp {
        width: ${({ hp }: StatusProps) => `${hp}%`};
        background: ${getHPColor};
        height: ${`${height}px`};
      }
      & > div.bar {
        width: ${({ hp }: StatusProps) => `${100 - hp}%`};
        height: ${`${height}px`};
      }
    }
  }
`;

interface Props {
  hp: number;
  status: string;
  fleeRate: number;
}

function StatusBar(props: Props): JSX.Element {
  return (
    <Status hp={props.hp}>
      <div className="health-display">
        <label htmlFor="hp-bar">HP:</label>
        <div id="hp-bar">
          <div className="hp" />
          <div className="bar" />
        </div>
      </div>
      <div className="status-display">
        <div>
          Flee: <i>~{props.fleeRate.toFixed(2)}%</i>
        </div>
        <p>
          <i>{title(props.status)}</i>
        </p>
      </div>
    </Status>
  );
}

function getHPColor({ hp }: StatusProps): string {
  if (hp === 0) return 'grey';
  if (hp > 0 && hp <= 20) return 'tomato';
  if (hp > 20 && hp <= 56) return 'khaki';
  else return 'springgreen';
}

export default memo(StatusBar);
