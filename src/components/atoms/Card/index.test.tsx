import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Card />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Card />))).toMatchSnapshot();
  });
});
