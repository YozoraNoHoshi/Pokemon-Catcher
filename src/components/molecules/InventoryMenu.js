import React, { PureComponent } from 'react';
import ModalMenu from './ModalMenu';

class InventoryMenu extends PureComponent {
  render() {
    return (
      <div className="InventoryMenu">
        <ModalMenu text="Bag">InventoryConponents/layout</ModalMenu>
      </div>
    );
  }
}

InventoryMenu.defaultProps = {};

InventoryMenu.propTypes = {};

export default InventoryMenu;
