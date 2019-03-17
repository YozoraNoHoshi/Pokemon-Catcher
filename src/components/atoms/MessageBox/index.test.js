import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Message from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Message />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Message />))).toMatchSnapshot();
  });
});
