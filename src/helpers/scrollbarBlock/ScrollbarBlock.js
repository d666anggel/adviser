import React from 'react';
import {Scrollbars} from "react-custom-scrollbars";

export default function ScrollbarBlock(props) {
	let renderThumbVertical = ({style, ...props}) => {
		const finalStyle = {
			...style,
			background: `linear-gradient(0deg, #DF44DB -44.33%, #FB7BC3 100%)`,
			borderRadius: 5,
			width: 10,
		};
		return <div style={finalStyle} {...props} />;
	}
	let renderTrackVertical = ({style, ...props}) => {
		const finalStyle = {
			...style,
			borderRadius: 5,
			width: 10,
			right: 0,
			bottom: 0,
			top: 0,
			backgroundColor: `#FFE8F5`,
			height: `85%`,
			margin: `auto`
		};
		return <div style={finalStyle} {...props} />;
	}
	let renderView = ({style, ...props}) => {
		const finalStyle = {
			...style, padding: `35px 45px`
		};
		return <div style={finalStyle} {...props} />;
	}

	return (
		<Scrollbars renderView={renderView} renderThumbVertical={renderThumbVertical}
					renderTrackVertical={renderTrackVertical}>
			{props.content}
		</Scrollbars>
	);
	}