import React, { PureComponent } from 'react';
import ModalMenu from './ModalMenu';

class TrainerMenu extends PureComponent {
  render() {
    return (
      <div className="TrainerMenu">
        <ModalMenu text="Trainer Details">Items in the trainer modal</ModalMenu>
      </div>
    );
  }
}

TrainerMenu.defaultProps = {};

TrainerMenu.propTypes = {};

export default TrainerMenu;
