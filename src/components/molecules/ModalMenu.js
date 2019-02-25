import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import Modal from '../atoms/Modal';
//https://alligator.io/react/modal-component/
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
      <div className="ModalMenu">
        <MenuButton click={this.toggleModal}>{this.props.text}</MenuButton>
        {this.state.open && (
          <Modal show={this.state.open} toggleModal={this.toggleModal}>
            {this.props.children}
          </Modal>
        )}
      </div>
    );
  }
}

ModalMenu.defaultProps = { text: '' };

ModalMenu.propTypes = {};

export default ModalMenu;
