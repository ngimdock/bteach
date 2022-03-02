import React from 'react'

const Checkbox = ({ text, htmlFor }) => {

	return(
		<div className="block md:inline-block">
	        <input  id={htmlFor} type="checkbox" name="neuf" className="ml-4 form-checkbox h-4 w-4 text-red-500 transition duration-150 ease-in-out" />
	        <label htmlFor={htmlFor} className="ml-2 text-sm check">{text}</label>
	      </div>
	)
}

export default Checkbox