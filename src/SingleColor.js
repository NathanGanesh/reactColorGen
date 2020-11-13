import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = (props) => {
	const { alpha, rgb, type, weight, index } = props;
	const bcg = rgb.join(',');
	const hex = rgbToHex(...rgb);
	const [ alert, setAlert ] = React.useState(false);
	useEffect(
		() => {
			const timeout = setTimeout(() => {
				setAlert(false);
			}, 3000);
			return () => clearTimeout(timeout);
		},
		[ alert ]
	);

	return (
		<div
			className="single-color"
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true);
			}}
		>
			<div className={`${index > 10 && 'color-light'}`}>
				<p>{weight}%</p>
				<p>{hex}</p>
				{alert && <p>Copy to clipboard</p>}
			</div>
		</div>
	);
};

export default SingleColor;
