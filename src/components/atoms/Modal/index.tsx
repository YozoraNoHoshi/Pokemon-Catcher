import React, { memo, ReactChildren } from 'react';
import MenuButton from '../MenuButton';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: steelblue;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 3px black;
  min-width: 66%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

interface Props {
  className?: string;
  closeOnInteract?: boolean;
  toggleModal?: (arg: any) => any;
  show?: boolean;
  children: ReactChildren;
}

function Modal(props: Props): JSX.Element | null {
  if (!props.show) return null;
  return (
    <StyledModal className="modal">
      {props.children}
      {!props.closeOnInteract && (
        <MenuButton onClick={props.toggleModal}>Close</MenuButton>
      )}
    </StyledModal>
  );
}

Modal.defaultProps = { closeOnInteract: false };

export default memo(Modal);
