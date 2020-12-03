import { shallow } from 'enzyme';
import React from 'react';

import Register from '.';

it('renders', () => {
    expect(shallow(<Register />)).toMatchSnapshot();
});

it('expects text to render', () => {
    expect(shallow(<Register />).text()).toMatch('First NameLast Name')
})
