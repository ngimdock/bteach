import React, { useState, useEffect } from 'react'

const InputText = (props) => {

	const [width, setWidth] = useState(0)
	
	useEffect(() => {
		let listener = window.addEventListener("resize", () => {
			setWidth(window.innerWidth)
		})

		return () => window.removeEventListener("resize", listener)
	})

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
			<button className=" rounded-full text-white absolute right-0 top-0 bg-primary w-8 h-8 md:w-auto md:h-auto px-3 py-2  md:px-5 md:py-3">
				{ width > 768 ? "rechercher" : "h" }
			</button>
		</div>
	)
}

export default InputText