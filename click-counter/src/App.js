import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		return setCount(count + 1);
	};

	return (
		<div data-test='component-app'>
			<h1 data-test='counter-display'>
				The counter is currently&nbsp;
				<span data-test='count'>{count}</span>
			</h1>
			<button data-test='increment-button' onClick={incrementCount}>
				Increment
			</button>
		</div>
	);
}

export default App;
