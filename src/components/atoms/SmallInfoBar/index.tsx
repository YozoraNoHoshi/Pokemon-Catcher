import React, { memo } from 'react';
import styled from 'styled-components';

const InfoBar = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  text: string;
  subText: string | number;
}

function SmallInfoBar(props: Props): JSX.Element {
  let smallText =
    typeof props.subText === 'number' ? `$${props.subText}` : props.subText;
  return (
    <InfoBar>
      <div>{props.text}</div>
      <p>{smallText}</p>
    </InfoBar>
  );
}

export default memo(SmallInfoBar);
