import React, { useState, useEffect, useRef } from 'react'


const InputText = (props) => {

	const [colorIcone, setColorIcone] = useState("text-gray2")
	const inputREf = useRef()
	const btnIconRef = useRef()


	const {
		type,
		name,
		value,
		id,
		placeholder,
		classe,
		handleChange,
		icone
	} = props

	return(
		<div className="w-full relative flex items-center border-b-2 border-gray2">
			<input 
				type={type} 
				name={name} 
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				className={` ${classe} group w-full py-2 md:py-3  text-gray-600 text-xs md:text-sm  focus:outline-none focus:bg-gray2-ligth focus:px-6`}
				onFocus={ () => setColorIcone("text-primary") }
				onBlur={ () => setColorIcone("text-gray2") }
				/>
			<button ref={btnIconRef} className={`${colorIcone} absolute right-0 group-focus:text-primary`}>
				{ icone }
			</button>
		</div>
	)
}

export default InputText