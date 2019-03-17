import React, { PureComponent } from 'react';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import styled from 'styled-components';

const Input = styled.input`
  width: 25ch;
  text-align: center;
  margin: 0;
`;

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
      <form onSubmit={this.handleSubmit}>
        <Flex column alCenter>
          <Input
            name="pokemon"
            type="text"
            onChange={this.handleChange}
            value={this.state.pokemon}
            placeholder="Pokemon name or ID (1-493)"
          />
          <MenuButton cWidth={100} as="button" type="submit">
            Search
          </MenuButton>
        </Flex>
      </form>
    );
  }
}

SearchPokedex.defaultProps = { submit: console.log };

SearchPokedex.propTypes = {};

export default SearchPokedex;
