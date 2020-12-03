import { shallow } from 'enzyme';
import React from 'react';

import Login from './login';

it('renders', () => {
    expect(shallow(<Login />)).toMatchSnapshot();
});

it('expects text to render', () => {
    expect(shallow(<Login />).text()).toBe('my login banner no worries')
})
