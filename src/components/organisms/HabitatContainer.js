import { PureComponent } from 'react';
import { navigate } from '@reach/router';

class HabitatContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedHabitat: props.currentHabitat,
      habitats: {
        sky: { name: 'sky', description: 'CLOUDS' },
        grass: { name: 'grass', description: "It's grass." },
        water: { name: 'water', description: 'Water, everywhere' },
        volcano: { name: 'volcano', description: 'It is really hot' },
        tower: { name: 'tower', description: 'A giant tower paints the sky' },
        ruin: { name: 'ruin', description: 'Ruins are scattered about' }
      },
      loading: false
    };
  }

  async componentDidMount() {
    // Make API call to database to get all the habitats from local database -> punt it into state
  }

  setHabitat = async () => {
    if (!this.state.loading) this.setState({ loading: true });
    let habitats = await 'MakeAPICallToGetAllHabitats';
    this.setState({ habitats, loading: false });
  };

  changeHabitat = () => {
    if (this.state.selectedHabitat !== this.props.currentHabitat) {
      this.props.changeHabitat(this.state.selectedHabitat);
      navigate('/menu');
    }
  };

  handleClick = evt => {
    evt.preventDefault();
    if (this.state.habitats[evt.target.id])
      this.setState({ selectedHabitat: evt.target.id });
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
