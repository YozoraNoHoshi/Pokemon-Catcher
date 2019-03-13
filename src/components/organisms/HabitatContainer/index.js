import { PureComponent } from 'react';
import { navigate } from '@reach/router';
import { getAllHabitats, getHabitatPokemon } from '../../../api';

class HabitatContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedHabitat: props.currentHabitat,
      habitats: {
        field: { name: 'field', description: '' }
      },
      loading: false
    };
  }

  async componentDidMount() {
    try {
      await Promise.all([
        this.setHabitat(),
        this.updateHabitatPokemon(this.state.selectedHabitat)
      ]);
    } catch (error) {
      alert('Oops, something seems to have gone wrong.');
    }
  }

  updateHabitatPokemon = async habitat => {
    let pokemon = await getHabitatPokemon(habitat);
    this.setState({
      selectedHabitat: habitat,
      habitatPokemon: pokemon
    });
  };

  setHabitat = async () => {
    if (!this.state.loading) this.setState({ loading: true });
    let habitats = await getAllHabitats();
    this.setState({ habitats, loading: false });
  };

  changeHabitat = () => {
    if (this.state.selectedHabitat !== this.props.currentHabitat) {
      this.props.changeHabitat(this.state.selectedHabitat);
    }
    navigate('/menu');
  };

  handleClick = async evt => {
    evt.preventDefault();
    if (this.state.habitats[evt.target.id]) {
      await this.updateHabitatPokemon(evt.target.id);
    }
  };

  render() {
    return this.props.children({
      state: this.state,
      handleClick: this.handleClick,
      changeHabitat: this.changeHabitat,
      setHabitat: this.setHabitat
    });
  }
}

HabitatContainer.defaultProps = {};

HabitatContainer.propTypes = {};

export default HabitatContainer;
