import React, { PureComponent } from 'react';
import MenuButton from './MenuButton';

class Modal extends PureComponent {
  render() {
    const showHideClassName = this.props.open
      ? 'Modal display-block'
      : 'Modal display-none';
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.children}
          <MenuButton click={this.props.toggleModal} />
        </section>
      </div>
    );
  }
}

Modal.defaultProps = {};

Modal.propTypes = {};

export default Modal;

/* 
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
*/
