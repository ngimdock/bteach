import React from 'react'

const CircleText = ({ children, size, bgCircle, uppercase, classe }) => {

	let sizeCircle
	if(size === "small"){
		sizeCircle = "w-10 h-10"
	}else{
		sizeCircle = "w-32 h-32 md:w-60 md:h-60 text-sm md:text-xl"
	}

	return(
		<div className={`${classe} ${sizeCircle} ${bgCircle} ${ uppercase && "uppercase" } rounded-full text-center text-white flex justify-center items-center tarking-wide`}>
			<p>{ children }</p>
		</div>
	)
}

export default CircleText