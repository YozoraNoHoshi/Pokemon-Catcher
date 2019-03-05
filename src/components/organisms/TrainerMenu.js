import React, { PureComponent } from 'react';
import ModalMenu from '../molecules/ModalMenu';

class TrainerMenu extends PureComponent {
  render() {
    return (
      <div className="TrainerMenu">
        <ModalMenu text="Trainer Details">
          {this.props.trainerName}
          {/* Save/Load Buttons */}
          {this.renderPokemonCards(this.props.pokemon)}
        </ModalMenu>
      </div>
    );
  }
}

TrainerMenu.defaultProps = {};

TrainerMenu.propTypes = {};

export default TrainerMenu;
