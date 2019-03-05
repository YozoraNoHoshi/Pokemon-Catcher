import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import Modal from '../atoms/Modal';
import Flex from '../atoms/Flex';

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
      <Flex jCenter className="modal-main">
        <MenuButton active={this.state.open} onClick={this.toggleModal}>
          {this.props.buttonText}
        </MenuButton>
        <Modal show={this.state.open} toggleModal={this.toggleModal}>
          {this.props.children}
        </Modal>
      </Flex>
    );
  }
}

ModalMenu.defaultProps = { header: '' };

export default ModalMenu;
