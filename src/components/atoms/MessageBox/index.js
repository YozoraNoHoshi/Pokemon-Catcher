import styled from 'styled-components';

const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  text-align: left;
  text-decoration: none;
  background: gainsboro;
  border-radius: 3px;
  /* min-height: 75px; */
  padding: 5px;
  margin: 3px;
  box-shadow: 0 0 3px black;
`;

export default MessageBox;
