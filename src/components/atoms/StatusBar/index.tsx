import React, { memo } from 'react';
import styled from 'styled-components';

const Status = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

interface Props {
  hp: number;
  status: string;
}

function StatusBar(props: Props): JSX.Element {
  return (
    <Status>
      <div>Status: {props.status}</div>
      <div>HP: {props.hp}%</div>
      <progress value={props.hp} max={100} />
    </Status>
  );
}

export default memo(StatusBar);
