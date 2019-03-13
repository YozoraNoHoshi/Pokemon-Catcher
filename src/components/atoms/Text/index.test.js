import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Text />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Text />))).toMatchSnapshot();
  });
});
