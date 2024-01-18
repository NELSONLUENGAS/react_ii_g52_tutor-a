import { useState } from 'react';
import './App.css';

import { Icons } from './components/Icons';
import { Inputs } from './components/Inputs';

function App() {
	const socialIcons = ['book', 'coffee', 'check-square'];

	const [inputs, setInputs] = useState({
		input_2: '',
		input_3: '',
		input_4: '',
		input_5: '',
	});

	return (
		<>
			<Icons icons={socialIcons} />
			<hr />
			<Inputs setInputs={setInputs} />

			{/* <button onClick={updateState}>SETEAR</button> */}
			<hr />
			<h1>Input #2: {inputs.input_2}</h1>
			<img
				src={inputs.input_2}
				alt=""
			/>
			<h1>Input #3: {inputs.input_3}</h1>
			<img
				src={inputs.input_3}
				alt=""
			/>
			<h1>Input #4: {inputs.input_4}</h1>
			<img
				src={inputs.input_4}
				alt=""
			/>
			<h1>Input #5: {inputs.input_5}</h1>
			<img
				src={inputs.input_5}
				alt=""
			/>
		</>
	);
}

export default App;
