import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import Modal from '../atoms/Modal';
import Flex from '../atoms/Flex';
//https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f
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
      <Flex jCenter ref={this.node} className="modal-main">
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
