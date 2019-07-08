import React, { useState, memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MenuButton from '../../atoms/MenuButton';
import Modal from '../../atoms/Modal';
import Flex from '../../atoms/Flex';
import Sprite from '../../atoms/Sprite';

const StyledSprite = styled(Sprite)`
  width: auto;
  margin-right: 5px;
`;

interface Props {
  buttonText: string;
  closeOnInteract?: boolean;
  sprite?: string;
  style?: any;
  children: any; // Children typing seems to be buggy
}

function ModalMenu(props: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(s => !s);

  // Fix typing for e: Event later
  const handleClick = (e: any) => {
    const node = ref.current!;
    const clickOutsideModal: boolean | undefined =
      props.closeOnInteract && open && !e.target.className.includes('modal');

    if (node.contains(e.target)) {
      if (clickOutsideModal) {
        setOpen(false);
      }
      return;
    }
    if (open) setOpen(false);
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
        buttonHeight={props.sprite ? '50px' : undefined}
      >
        {props.sprite && <StyledSprite src={props.sprite} />}
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
