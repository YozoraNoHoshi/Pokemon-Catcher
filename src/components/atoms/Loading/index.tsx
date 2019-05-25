import React, { PureComponent } from 'react';
interface Props {}
interface State {}

class Loading extends PureComponent<Props, State> {
  render() {
    return <div className="Loading">Loading...</div>;
  }
}

export default Loading;
