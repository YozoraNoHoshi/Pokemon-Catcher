import React, { useState, memo } from 'react';

interface Props {}

function Loading(props: Props): JSX.Element {
  return <div className="Loading">Loading...</div>;
}

Loading.defaultProps = {};

export default memo(Loading);
