import React, { useState, useEffect } from 'react';
import './App.css';

import fetchPost from './services/fetchPost';

function App() {
	const [user, setUser] = useState(undefined);
	const [post, setPost] = useState({});

	useEffect(() => {
		const { title } = fetchPost();
		setPost({ title });
	}, []);

	const getUserHandler = () => {
		setUser('John Doe');
	};

	const fetchPostHandler = async () => {
		const { title, body } = await fetchPost();
		setPost({ title, body });
	};

	return (
		<div data-test='component-app' className='App'>
			<h1>Ladder Labs Testing</h1>
			<button data-test='get-user-button' onClick={getUserHandler}>
				Get User
			</button>
			{user && <p data-test='user-name'>{user}</p>}
			<button data-test='get-post-button' onClick={fetchPostHandler}>
				Get Post
			</button>
			{post && <p data-test='post-title'>{post.title}</p>}
		</div>
	);
}

export default App;
