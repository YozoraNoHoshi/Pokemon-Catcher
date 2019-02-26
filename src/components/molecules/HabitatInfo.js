import React, { PureComponent } from 'react';
import Card from '../atoms/Card';
import styled from 'styled-components';

const StyledHInfo = styled.div``;

class HabitatInfo extends PureComponent {
  renderPokemonCards = pokemon => {
    return pokemon.map(p => <Card pokemon={p} />);
  };
  render() {
    let habitat = this.props.habitat;
    return (
      <StyledHInfo className="HabitatInfo">
        {habitat.image && <img src={habitat.image} alt="" />}
        <div>{habitat.description}</div>
        <div>{this.renderPokemonCards(habitat.pokemon)}</div>
      </StyledHInfo>
    );
  }
}

HabitatInfo.defaultProps = {
  habitat: { image: '', pokemon: [{}], description: '' }
};

HabitatInfo.propTypes = {};

export default HabitatInfo;

// Should be Short description about habitat, maybe a picture, contains list of all pokemon that can appear in the habitat
// Picture/Header

// Description about Habitat
/* Render the pokemon cards that can appear in the habitat
 */
