import React, { useState, useEffect } from 'react'

const InputText = (props) => {

	const {
		type,
		name,
		value,
		id,
		placeholder,
		classe,
		handleChange
	} = props

	return(
		<div className="w-full relative flex items-center">
			<input 
				type={type} 
				name={name} 
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				className={` ${classe}  w-full py-2 px-6 py-2 md:py-3  text-gray-600 text-xs md:text-sm rounded-full border-2 border-primary focus:outline-none`}
				/>
			<button className="">
				h
			</button>
		</div>
	)
}

export default InputText