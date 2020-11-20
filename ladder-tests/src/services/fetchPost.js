import axios from 'axios';

const fetchPost = async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1'
	);
	console.log(response.data);
	return response.data;
};

export default fetchPost;
