const post = {
	userId: 1,
	id: 1,
	title: 'mock title',
	body:
		'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
};

const fetchPost = async () => {
	const response = await new Promise((resolve) => {
		resolve(post);
	});
	return response;
};

export default fetchPost;
