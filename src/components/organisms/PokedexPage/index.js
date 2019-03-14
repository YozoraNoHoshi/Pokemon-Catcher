import React, { PureComponent } from 'react';
import { getPokemon } from '../../../api';
import DetailedCard from '../../atoms/DetailedCard';
import { MISSINGNO } from '../../../data';

class PokedexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      loading: true
    };
  }
  // get pokemon data from this.props.location.state OR if state isnt a thing (came here by direct nav) make an API call to get the information
  async componentDidMount() {
    try {
      let { key, ...passedPokemon } = this.props.location.state || {};
      if (Object.keys(passedPokemon).length === 0) {
        let pokemon = await getPokemon(this.props.entry);
        if (pokemon.length === 0) pokemon = MISSINGNO;
        this.setState({ pokemon, loading: false });
      } else {
        this.setState({ pokemon: passedPokemon, loading: false });
      }
    } catch (error) {
      alert('Oops, something seems to have gone wrong.');
    }
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    let {
      id,
      species,
      title,
      flavor_text,
      catch_rate,
      sprite
    } = this.state.pokemon;
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
