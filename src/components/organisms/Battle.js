import React, { PureComponent } from 'react';

class Battle extends PureComponent {
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
    return <div className="Battle" />;
  }
}

Battle.defaultProps = {};

Battle.propTypes = {};

export default Battle;
