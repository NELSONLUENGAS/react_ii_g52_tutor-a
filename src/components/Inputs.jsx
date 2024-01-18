import React from 'react';

export const Inputs = ({ setInputs }) => {
	function handleOnChange(event) {
		const { value } = event.target;
		const { name } = event.target;

		setInputs((previusState) => {
			const newState = {
				...previusState,
				[name]: value,
			};

			console.log(newState);
			return newState;
		});
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();

		const [input2, input3, input4, input5] = event.target;
		const newSate = {
			input_2: input2.value,
			input_3: input3.value,
			input_4: input4.value,
			input_5: input5.value,
		};

		setInputs(newSate);
		// console.log(event.target[0].value);
	};

	return (
		<>
			<form onSubmit={(event) => handleOnSubmit(event)}>
				<input
					type="text"
					name="input_2"
					id="input_2"
					// onChange={(event) => handleOnChange(event)}
				/>
				<input
					type="text"
					name="input_3"
					id="input_3"
					// onChange={(event) => handleOnChange(event)}
				/>
				<input
					type="text"
					name="input_4"
					id="input_4"
					// onChange={(event) => handleOnChange(event)}
				/>
				<input
					type="text"
					name="input_5"
					id="input_5"
					// onChange={(event) => handleOnChange(event)}
				/>
				<input
					type="submit"
					value="Enviar"
				/>
			</form>
		</>
	);
};
