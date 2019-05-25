import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from '.';

describe('<StyledText />', () => {
  it('renders without props', () => {
    shallow(<Modal />);
  });

  it('matches snapshot without props', () => {
    expect(toJson(shallow(<Modal />))).toMatchSnapshot();
  });
});
