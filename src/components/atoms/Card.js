import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div``;

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
          <div className="card-front">
            <img src={this.props.ball} alt="" />
          </div>
          <div className={`card-slot ${this.props.suite}`}>
            <img src={this.props.sprite} alt={this.props.name} />
            <div className="card-text">{this.props.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = { pokemon: {}, ball: '' };

Card.propTypes = {};

export default Card;

// pokemon card, maybe take the structure from Pokedex app
