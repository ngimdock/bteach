import React from 'react'
import {Image} from 'react-image-progressive-loading'
import styles from './imgCircle.module.css'

const ImgCircle = ({src, alt, size, classe}) => {
	let dimention;

	if(size === "small"){
		dimention = "w-8 md:w-10 h-8 md:h-10  rounded-lg "
	}else{
		dimention = "h-full w-full md:w-72  rounded-2xl "
	}

	return(
		<Image 
			image={src} 
			alt={alt} 
			className={`${classe} ${dimention} ${styles.defaultStyle} `}
		/>
	)}

export default ImgCircle