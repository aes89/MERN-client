import { shallow } from 'enzyme';
import React from 'react';

import App from './App';


test('renders learn react link', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
