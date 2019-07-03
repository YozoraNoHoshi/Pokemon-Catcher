import styled, { StyledComponent } from 'styled-components';

const MessageBox: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: left;
  text-decoration: none;
  background: gainsboro;
  border-radius: 3px;
  padding: 5px;
  margin: 3px;
  box-shadow: 0 0 3px black;
  width: 100%;
  :hover {
    cursor: default;
  }
`;

export default MessageBox;
