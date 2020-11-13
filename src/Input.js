import React from 'react';

export default function Input({ handleOnSubmit, handleInputChange, color }) {
	return (
		<form className="form" onSubmit={(e) => handleOnSubmit(e)}>
			<input placeholder="#f15025" value={color} onChange={(e) => handleInputChange(e)} />
			<input className="submit" type="submit" value="Submit" />
		</form>
	);
}
