import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
	return (
		<div>
			<h1>Text</h1>
		</div>
	);
};

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default GuessedWords;
