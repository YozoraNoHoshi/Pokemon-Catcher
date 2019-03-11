import React, { PureComponent } from 'react';
import { getPokemon } from '../../api';
import DetailedCard from '../molecules/DetailedCard';
import { navigate } from '@reach/router';

class PokedexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      loaded: false
    };
  }
  // get pokemon data from this.props.location.state OR if state isnt a thing (came here by direct nav) make an API call to get the information
  async componentDidMount() {
    if (!this.props.location.state) {
      let pokemon = await getPokemon(this.props.entry);
      if (pokemon.length === 0) return navigate('/menu', { replace: true });
      this.setState({ pokemon, loaded: true });
    } else this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) return <div>Loading...</div>;
    let { id, species, title, flavor_text, catch_rate, sprite } =
      this.props.location.state || this.state.pokemon;
    return (
      <DetailedCard
        id={id}
        species={species}
        title={title}
        flavor_text={flavor_text}
        catch_rate={catch_rate}
        sprite={sprite}
      />
    );
  }
}

PokedexPage.defaultProps = {};

PokedexPage.propTypes = {};

export default PokedexPage;
