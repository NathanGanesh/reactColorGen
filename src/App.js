import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [ color, setColor ] = React.useState('');
	return (
		<main>
			<nav>
				<h2>color generator project</h2>
				<form>
					<input />
				</form>
			</nav>
		</main>
	);
}

export default App;
