import React, { memo } from 'react';
import useInput from '../../hooks/useInput';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import styled from 'styled-components';

const Input = styled.input`
  width: 25ch;
  text-align: center;
  margin: 0;
  border: 1px solid grey;
  padding: 5px;
  font-size: 1.5em;
  border-radius: 3px;
`;

interface Props {
  submit: (pokemon: string) => void;
}

function SearchPokedex(props: Props): JSX.Element {
  const { input: pokemon, handleChange, setInput: setPokemon } = useInput('');

  const handleSubmit = () => {
    props.submit(pokemon);
    setPokemon('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex column alCenter>
        <Input
          name="pokemon"
          type="text"
          onChange={handleChange}
          value={pokemon}
          placeholder="Enter name or number (1-493)"
        />
        <MenuButton cWidth={100} as={'button' as 'button'} type="submit">
          Search
        </MenuButton>
      </Flex>
    </form>
  );
}

SearchPokedex.defaultProps = { submit: () => {} };

export default memo(SearchPokedex);

// Change this to hooks
// class SearchPokedex extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { pokemon: '' };
//   }

//   handleChange = evt => {
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.submit(this.state.pokemon);
//     this.setState({ pokemon: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Flex column alCenter>
//           <Input
//             name="pokemon"
//             type="text"
//             onChange={this.handleChange}
//             value={this.state.pokemon}
//             placeholder="Enter name or number (1-493)"
//           />
//           <MenuButton cWidth={100} medium as="button" type="submit">
//             Search
//           </MenuButton>
//         </Flex>
//       </form>
//     );
//   }
// }

// SearchPokedex.defaultProps = { submit: console.log };

// SearchPokedex.propTypes = {};

// export default SearchPokedex;
