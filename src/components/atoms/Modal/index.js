import React, { PureComponent } from 'react';
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

  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

class Modal extends PureComponent {
  render() {
    if (!this.props.show) return null;
    return (
      <StyledModal className="modal">
        {this.props.children}
        <MenuButton onClick={this.props.toggleModal}>Close</MenuButton>
      </StyledModal>
    );
  }
}

export default Modal;
