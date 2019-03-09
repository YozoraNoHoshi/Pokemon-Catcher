import React, { PureComponent } from 'react';
import Card from '../atoms/Card';
import styled from 'styled-components';
import Flex from '../atoms/Flex';
import { getHabitatPokemon } from '../../api';
import Loading from '../atoms/Loading';

const StyledHInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

class HabitatInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentDidMount() {
    let pokemon = await getHabitatPokemon(this.props.name);
    this.setState({ pokemon, loaded: true });
  }

  renderPokemonCards = pokemon => {
    return pokemon.map(p => (
      <Card key={p.name} name={p.name} sprite={p.sprite} />
    ));
  };
  render() {
    return (
      <StyledHInfo className="HabitatInfo">
        <h1>{this.props.name}</h1>
        {this.props.image && <img src={this.props.image} alt="" />}
        <div>{this.props.description}</div>
        <Flex column>
          Available Pokemon
          {this.state.loaded ? (
            <Flex row jCenter wrap>
              {this.renderPokemonCards(this.state.pokemon)}
            </Flex>
          ) : (
            <Loading />
          )}
        </Flex>
      </StyledHInfo>
    );
  }
}

HabitatInfo.defaultProps = {
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
