import React, { memo } from 'react';

interface Props {}

function Loading(props: Props): JSX.Element {
  return (
    <div className="Loading">
      <img src="./static/pikachu.png" alt="Loading..." />
    </div>
  );
}

Loading.defaultProps = {};

export default memo(Loading);
