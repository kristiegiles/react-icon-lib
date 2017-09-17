import React from 'react'
//import glamorous from 'glamorous'
import classnames from 'classnames'
import './Icon.css';
import iconMap from './IconMap'

// const IconSvg = glamorous.svg(
// 	{
// 		display: 'inline-block',
// 		height: '1.2em',
// 		width: '1.2em',
// 		fill: 'currentColor',
// 		verticalAlign: 'currentColor'
// 	}
//   )
  
const Icon = ({slug, className}) => {
    //const iconPathData = require(`./icons/${slug}.svg`);
	return (
		<svg className={classnames(`icon icon--${slug}`, className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			dangerouslySetInnerHTML={{__html: iconMap[slug]}}/>
	)
}

export default Icon