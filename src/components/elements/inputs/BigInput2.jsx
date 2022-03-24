import React from 'react'
import { BiSearch } from 'react-icons/bi';


const BigInput1 = (props) => {

	const {
		type,
		name,
		value,
		id,
		placeholder,
		classe,
		handleChange,
		onSubmit
	} = props

	return(
		<div className={`${classe} w-full relative flex items-center`}>
			<input 
				type={type} 
				name={name} 
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				className={` w-full py-2 px-6 py-2 md:py-3  text-gray-600 text-xs md:text-sm rounded-full border-2 border-primary focus:outline-none`}
				/>
			<button onClick={onSubmit} className=" rounded-full text-white absolute right-0 top-0 bg-primary h-full px-3 py-2.5 md:px-5 md:py-3 text-xs md:text-base">
				<BiSearch size="15" />
			</button>
		</div>
	)
}

export default BigInput1