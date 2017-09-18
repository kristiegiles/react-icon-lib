import React from 'react'
import classnames from 'classnames'
import './Icon.css';

const Icon = ({slug, className}) => {
    const iconPathData = require(`./icons/${slug}.svg`);
	return (
		<svg className={classnames(`icon icon--${slug}`, className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			dangerouslySetInnerHTML={{__html: iconPathData}}/>
	)
}

export default Icon