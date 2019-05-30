import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import { Pokemon } from '../../../types';

interface Props {
  name: string;
  image?: string;
  description: string;
  pokemon: Pokemon[];
}

class HabitatInfo extends PureComponent<Props, {}> {
  static defaultProps = {
    pokemon: [{}],
    description:
      'A quiet place with a lot of nothing. Sometimes you can see flicks of... something.',
    name: 'Empty Space'
  };
  renderPokemonCards = (pokemon: Pokemon[]) => {
    return pokemon.map(p => (
      <Card
        key={`${p.name}`}
        name={p.name}
        species={p.species}
        sprite={p.sprite}
      />
    ));
  };
  render() {
    return (
      <Flex column alCenter style={{ marginTop: '20px', marginBottom: '15px' }}>
        <Flex large txCenter>
          {title(this.props.name)}
        </Flex>
        {this.props.image && <img src={this.props.image} alt="" />}
        <Flex txCenter>{this.props.description}</Flex>
        <Flex
          row
          jCenter
          fWrap
          style={{ overflowY: 'auto', height: '55vh', marginTop: '5px' }}
        >
          {this.renderPokemonCards(this.props.pokemon)}
        </Flex>
      </Flex>
    );
  }
}

export default HabitatInfo;

// Should be Short description about habitat, maybe a picture, contains list of all pokemon that can appear in the habitat
// Picture/Header

// Description about Habitat
/* Render the pokemon cards that can appear in the habitat
 */
