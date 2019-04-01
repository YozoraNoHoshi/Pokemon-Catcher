import React, { PureComponent } from 'react';
import MenuButton from '../../atoms/MenuButton';
import Modal from '../../atoms/Modal';
import Flex from '../../atoms/Flex';

class ModalMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.node = React.createRef();
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.current.contains(e.target)) {
      if (
        this.props.closeOnInteract &&
        this.state.open &&
        !e.target.className.includes('modal')
      ) {
        this.toggleModal();
      }
      return;
    }
    if (this.state.open) this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevSt => {
      return { open: !prevSt.open };
    });
  };

  render() {
    return (
      <Flex jCenter ref={this.node} className="modal">
        <MenuButton
          style={this.props.style}
          className="modal"
          active={this.state.open}
          onClick={this.toggleModal}
        >
          {this.props.buttonText}
        </MenuButton>
        <Modal
          show={this.state.open}
          closeOnInteract={this.props.closeOnInteract}
          toggleModal={this.toggleModal}
        >
          {this.props.children}
        </Modal>
      </Flex>
    );
  }
}

ModalMenu.defaultProps = { buttonText: 'Open', closeOnInteract: false };

export default ModalMenu;
