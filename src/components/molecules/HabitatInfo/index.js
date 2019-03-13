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
      <Flex column alCenter className="HabitatInfo">
        <Flex large txCenter>
          {title(this.props.name)}
        </Flex>
        {this.props.image && <img src={this.props.image} alt="" />}
        <Flex txCenter>{this.props.description}</Flex>
        <Flex
          row
          jCenter
          fWrap
          style={{ overflowY: 'auto', height: '60vh', marginTop: '5px' }}
        >
          {this.renderPokemonCards(this.props.pokemon)}
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
