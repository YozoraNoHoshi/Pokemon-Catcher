import React, { PureComponent } from 'react';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';

class NotFound extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className="NotFound">
        This part of the Pal Park is currently under construction. You can't
        enter here.
        <ChangeScreenButton to="/home">
          Return to the Pal Park
        </ChangeScreenButton>
      </div>
    );
  }
}

NotFound.defaultProps = {};

NotFound.propTypes = {};

export default NotFound;
