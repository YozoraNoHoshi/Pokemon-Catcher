import React, { PureComponent } from 'react';
import MenuButton from '../../atoms/MenuButton';

// Can be made into a generic form component if more than one form is used
class SearchPokedex extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pokemon: '' };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.submit(this.state.pokemon);
    this.setState({ pokemon: '' });
  };

  render() {
    return (
      <div className="SearchPokedex">
        <form onSubmit={this.handleSubmit}>
          <input
            name="pokemon"
            type="text"
            onChange={this.handleChange}
            value={this.state.pokemon}
            placeholder="Pokemon name or ID (1-493)"
          />
          <MenuButton as="button" type="submit">
            Search
          </MenuButton>
        </form>
      </div>
    );
  }
}

SearchPokedex.defaultProps = { submit: console.log };

SearchPokedex.propTypes = {};

export default SearchPokedex;
