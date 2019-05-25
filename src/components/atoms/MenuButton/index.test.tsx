import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MenuButton from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<MenuButton />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<MenuButton />))).toMatchSnapshot();
  });
});
