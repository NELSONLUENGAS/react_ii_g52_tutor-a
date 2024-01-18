import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importacion individual de fa
import { faArrows } from '@fortawesome/free-solid-svg-icons';

export const Icons = ({ icons }) => {
	const [book, coffee, check] = icons;

	return (
		<>
			{/* Forma global dinamica */}
			<FontAwesomeIcon icon={book} />
			<FontAwesomeIcon icon={coffee} />
			<FontAwesomeIcon icon={check} />

			{/* Forma global */}
			<FontAwesomeIcon icon="arrow-alt-circle-down" />

			<FontAwesomeIcon icon={faArrows} />
		</>
	);
};
