import React from 'react';
import Icon from './Icon';
import './IconDocs.css'
import iconMap from './IconMap'

const fileList = require.context('./icons', true, /[\s\S]*$/);
const iconDocs = fileList.keys().map((filename) => {
	let fileName = filename.replace('./', '').replace('.svg', '');
	console.log(fileName)
	return (
		<div className="demo-block">
			<Icon slug={fileName}/>
			<span className="label">{fileName}</span>
		</div>
	)
})

const IconDocs = props => {

	return (
		<div className="container">{iconDocs}</div>
	)
}

export default IconDocs