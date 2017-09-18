import React from 'react';
import Icon from './Icon';
import './IconDocs.css'
import iconMap from './IconMap'

const fileList = require.context('./icons', true, /[\s\S]*$/);
const iconDocs = fileList.keys().map((filename) => {
	let slug = filename.replace('./', '').replace('.svg', '');
	return (
		<div className="demo-block" key={slug}>
			<Icon slug={slug}/>
			<span className="label">{slug}</span>
		</div>
	)
})

const IconDocs = props => {
	return (
		<div className="container">{iconDocs}</div>
	)
}

export default IconDocs