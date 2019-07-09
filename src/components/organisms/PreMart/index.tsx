import React, { useState, memo, useEffect } from 'react';
import Mart from '../../pages/Mart';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

function PreMart(props: Props): JSX.Element {
  useEffect(() => {}, []);

  return <Mart />;
}

PreMart.defaultProps = {};

export default memo(PreMart);
