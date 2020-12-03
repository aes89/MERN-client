import { shallow } from 'enzyme';
import React from 'react';

import UserSettings from '.';

it('renders', () => {
    expect(shallow(<UserSettings />)).toMatchSnapshot();
});

it('expects text to render', () => {
    expect(shallow(<UserSettings />).text()).toMatch('First NameLast Name')
})
