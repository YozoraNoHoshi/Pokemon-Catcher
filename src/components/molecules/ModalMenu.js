import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import Modal from '../atoms/Modal';
import styled from 'styled-components';
//https://alligator.io/react/modal-component/

const StyledModalMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

class ModalMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleModal = () => {
    this.setState(prevSt => {
      return { open: !prevSt.open };
    });
  };

  render() {
    return (
      <StyledModalMenu>
        <MenuButton click={this.toggleModal}>{this.props.text}</MenuButton>
        <Modal show={this.state.open} toggleModal={this.toggleModal}>
          {this.props.children}
        </Modal>
      </StyledModalMenu>
    );
  }
}

ModalMenu.defaultProps = { text: '' };

export default ModalMenu;
