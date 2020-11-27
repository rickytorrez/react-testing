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

describe('state controlled input field', () => {
	test('state updates with value of input box upon change', () => {
		const mockSetCurrentGuess = jest.fn();
		React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

		const wrapper = setup();
		const inputBox = findByTestAttr(wrapper, 'input-box');

		// The effect of these two lines is simulating inputBox getting a value of 'train'
		const mockEvent = { target: { value: 'train' } };
		inputBox.simulate('change', mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
	});
});
