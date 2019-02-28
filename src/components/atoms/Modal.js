import React, { PureComponent } from 'react';
import MenuButton from './MenuButton';
import styled from 'styled-components';
import getCSSProperties from '../../helpers/getCSSProperties';

const StyledModal = styled.div`
  display: ${show};
  & > section.modal-main {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
`;

class Modal extends PureComponent {
  render() {
    return (
      <StyledModal>
        <section className="modal-main">
          {this.props.children}
          <MenuButton onClick={this.props.toggleModal}>Close</MenuButton>
        </section>
      </StyledModal>
    );
  }
}

export default Modal;

function show(props) {
  return getCSSProperties(props, { show: 'flex' }, 'none');
}
