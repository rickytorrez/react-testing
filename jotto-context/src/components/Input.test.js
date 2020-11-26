import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';

import Input from './Input';

/**
 * Set up function for the Input component
 * @param {string} secretWord - Component prop specific to this group
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = '') => {
	return shallow(<Input secretWord={secretWord} />);
};

test('Input renders without werror', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-input');
	expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
	checkProps(Input, { secretWord: 'party' });
});
