import React from 'react';
import Enzyme, { shallow } from 'enzyme';

// adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @funtion setup
 * @returns { ShallowWrapper }
 */
const setup = () => shallow(<App />);

/**
 * Function that helps find an attribute inside of the wrapper.
 * @function findByTestAttr
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'component-app');
	expect(appComponent.length).toBe(1);
});

test('renders button', () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, 'increment-button');
	expect(button.length).toBe(1);
});

test('renders counter display', () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
	const wrapper = setup();
	const count = findByTestAttr(wrapper, 'count').text(); // stores the text from the node
	expect(count).toBe('0');
});

test('clicking on button increments counter display', () => {
	const wrapper = setup();

	// find the button
	const button = findByTestAttr(wrapper, 'increment-button');

	// click the button
	button.simulate('click');

	// find the count, and
	const count = findByTestAttr(wrapper, 'count').text();

	// test that the number has been incremented
	expect(count).toBe('1');
});
