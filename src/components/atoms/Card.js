import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  handleClick = () => {
    this.setState(prev => {
      return { flip: !prev.flip };
    });
  };

  render() {
    return (
      <div className={`Card ${this.state.flip && 'flip'}`}>
        <div className="card" onClick={this.handleClick}>
          <div className="card-front" />
          <div className={`card-slot ${this.props.suite}`}>
            <img src={this.props.sprite} alt={this.props.name} />
            <div className="card-text">{this.props.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = { name: '', sprite: 'path' };

Card.propTypes = {};

export default Card;
