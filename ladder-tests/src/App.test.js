import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// Adapter
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

import fetchPost from './services/fetchPost';

// Set up Enzyme's React adapter
Enzyme.configure({ adapter: new Adapter() });

// jest mock
jest.mock('./services/fetchPost.js');

test('renders component without error', () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find("[data-test='component-app']");
	expect(appComponent.length).toBe(1);
});

test('renders a Get User button', () => {
	const wrapper = shallow(<App />);
	const button = wrapper.find("[data-test='get-user-button']");
	expect(button.length).toBe(1);
});

test('check to see that initial user state is undefined', () => {
	const wrapper = shallow(<App />);
});

test('clicking on button updates the user state', () => {
	const wrapper = shallow(<App />);

	// find the button
	const button = wrapper.find("[data-test='get-user-button']");

	// click the button
	button.simulate('click');

	// find the user attribute
	const user = wrapper.find("[data-test='user-name']").text();

	// test that the attribute has been updated
	expect(user).toBe('John Doe');
});

test('mocking an API call with fixture data', (done) => {
	const wrapper = shallow(<App />);

	const button = wrapper.find("[data-test='get-post-button']");

	button.simulate('click');

	setTimeout(() => {
		const postTitle = wrapper.find("[data-test='post-title']").text();
		wrapper.update();
		expect(postTitle).toBe('mock title');
		done();
	});
});
