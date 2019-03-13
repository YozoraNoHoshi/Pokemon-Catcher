import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Sprite from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Sprite />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Sprite />))).toMatchSnapshot();
  });
});
