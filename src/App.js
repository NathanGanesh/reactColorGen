import React, { useState } from 'react';
import Input from './Input';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
	const [ color, setColor ] = React.useState('');
	const [ error, setError ] = useState(false);
	const [ list, setList ] = useState(new Values('#f15025').all(10));

	const handleInputChange = (e) => {
		setColor(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};
	console.log(list);

	return (
		<main>
			<nav className="footer">
				<h2>color generator project</h2>
				<Input handleOnSubmit={handleSubmit} color={color} handleInputChange={handleInputChange} />
			</nav>
			<div className="colors">
				{list.map((item, index) => {
					return <SingleColor {...item} index={index} key={index} />;
				})}
			</div>
		</main>
	);
}

export default App;
