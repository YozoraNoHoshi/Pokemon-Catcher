import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';

class HabitatInfo extends PureComponent {
  renderPokemonCards = pokemon => {
    return pokemon.map(p => (
      <Card key={p.name} name={p.species} sprite={p.sprite} />
    ));
  };
  render() {
    return (
      <Flex column className="HabitatInfo">
        <h1>{title(this.props.name)}</h1>
        {this.props.image && <img src={this.props.image} alt="" />}
        <div>{this.props.description}</div>
        <Flex column>
          Available Pokemon
          <Flex row jCenter fWrap>
            {this.renderPokemonCards(this.props.pokemon)}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

HabitatInfo.defaultProps = {
  pokemon: [{}],
  description:
    'A quiet place with a lot of nothing. Sometimes you can see flicks of... something.',
  name: 'Empty Space'
};

HabitatInfo.propTypes = {};

export default HabitatInfo;

// Should be Short description about habitat, maybe a picture, contains list of all pokemon that can appear in the habitat
// Picture/Header

// Description about Habitat
/* Render the pokemon cards that can appear in the habitat
 */
