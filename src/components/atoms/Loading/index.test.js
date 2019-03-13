import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Loading />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Loading />))).toMatchSnapshot();
  });
});
