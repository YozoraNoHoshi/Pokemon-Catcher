import React, { PureComponent } from 'react';
import ModalMenu from '../molecules/ModalMenu';

class InventoryMenu extends PureComponent {
  renderInventoryButtons = buttons => {
    return buttons.map(m => {
      return <div>hi</div>;
    });
  };
  render() {
    return (
      <div className="InventoryMenu">
        <ModalMenu text="Bag">
          All the stuff inside of the bag goes into the modal menu
        </ModalMenu>
      </div>
    );
  }
}

InventoryMenu.defaultProps = {};

InventoryMenu.propTypes = {};

export default InventoryMenu;
