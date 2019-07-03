import React, { useState, memo } from 'react';
import MessageBox from '../../atoms/MessageBox';
import styled from 'styled-components';

const Log = styled.div`
  & > aside {
    cursor: pointer;
    width: 20vw;
    position: fixed;
    top: 0;
    right: 1%;
    & > div {
      height: 100%;
      overflow-y: auto;
      pointer-events: none;
      & > div {
        border-bottom: 2px solid grey;
        width: 100%;
        text-align: center;
      }
      & > p {
        pointer-events: none;
        width: 100%;
        margin: 5px;
        text-align: left;
      }
    }
  }
`;

interface Props {
  messages: string[];
}

function MessageLog(props: Props): JSX.Element {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(s => !s);
  };

  const lastIndex = props.messages.length - 1;
  const lastItem = props.messages[lastIndex];

  const renderedMessages = props.messages.map(m => {
    return <p>{m}</p>;
  });

  return (
    <Log>
      <MessageBox>{lastItem}</MessageBox>
      <aside onClick={handleClick}>
        <MessageBox>
          <div>Event Log</div>
          {open && renderedMessages}
        </MessageBox>
      </aside>
    </Log>
  );
}

export default memo(MessageLog);
