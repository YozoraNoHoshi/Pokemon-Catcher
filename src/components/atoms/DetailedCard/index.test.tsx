import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DetailedCard from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<DetailedCard />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<DetailedCard />))).toMatchSnapshot();
  });
});
