import React, { useState, memo, useEffect } from 'react';
import MenuButton from '../../atoms/MenuButton';
import Modal from '../../atoms/Modal';
import Flex from '../../atoms/Flex';
import Sprite from '../../atoms/Sprite';

interface Props {
  buttonText: string;
  closeOnInteract?: boolean;
  sprite?: string;
  style?: any;
  children: JSX.Element;
}

function ModalMenu(props: Props): JSX.Element {
  const ref = React.createRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(s => !s);

  // Fix typing for e: Event later
  const handleClick = (e: any) => {
    const node: HTMLDivElement = ref.current!;
    if (node.contains(e.target)) {
      if (
        props.closeOnInteract &&
        open &&
        !e.target.className.includes('modal')
      ) {
        toggleModal();
      }
      return;
    }
    if (open) toggleModal();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, false);
    return () => {
      document.removeEventListener('click', handleClick, false);
    };
  });

  return (
    <Flex jCenter ref={ref} className="modal">
      <MenuButton
        style={props.style}
        className="modal"
        active={open}
        onClick={toggleModal}
      >
        {props.sprite && (
          <Sprite
            src={props.sprite}
            style={{ width: 'auto', marginRight: '5px' }}
          />
        )}
        {props.buttonText}
      </MenuButton>
      <Modal
        show={open}
        closeOnInteract={props.closeOnInteract}
        toggleModal={toggleModal}
      >
        {props.children}
      </Modal>
    </Flex>
  );
}

ModalMenu.defaultProps = {
  buttonText: 'Open',
  closeOnInteract: false,
  sprite: ''
};

export default memo(ModalMenu);

// import React, { PureComponent } from 'react';
// class ModalMenu extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//     this.node = React.createRef();
//   }
//   componentDidMount() {
//     document.addEventListener('click', this.handleClick, false);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('click', this.handleClick, false);
//   }

//   handleClick = e => {
//     if (this.node.current.contains(e.target)) {
//       if (
//         this.props.closeOnInteract &&
//         this.state.open &&
//         !e.target.className.includes('modal')
//       ) {
//         this.toggleModal();
//       }
//       return;
//     }
//     if (this.state.open) this.toggleModal();
//   };

//   toggleModal = () => {
//     this.setState(prevSt => {
//       return { open: !prevSt.open };
//     });
//   };

//   render() {
//     return (
//       <Flex jCenter ref={this.node} className="modal">
//         <MenuButton
//           style={this.props.style}
//           className="modal"
//           active={this.state.open}
//           onClick={this.toggleModal}
//         >
//           {this.props.sprite && (
//             <Sprite
//               src={this.props.sprite}
//               style={{ width: 'auto', marginRight: '5px' }}
//             />
//           )}
//           {this.props.buttonText}
//         </MenuButton>
//         <Modal
//           show={this.state.open}
//           closeOnInteract={this.props.closeOnInteract}
//           toggleModal={this.toggleModal}
//         >
//           {this.props.children}
//         </Modal>
//       </Flex>
//     );
//   }
// }

// ModalMenu.defaultProps = {
//   buttonText: 'Open',
//   closeOnInteract: false,
//   sprite: ''
// };

// export default ModalMenu;
