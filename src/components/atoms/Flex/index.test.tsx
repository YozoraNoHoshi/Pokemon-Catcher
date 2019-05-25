import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Flex from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Flex />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Flex />))).toMatchSnapshot();
  });
});
