import React from "react";


const Dropdown = ({ value, options, onChange }) => {
  	return (

	    <select value={value} onChange={onChange} className="select mx-3 lg:mt-0 mt-5">
	        {options.map((option) => (
	          <option value={option.value}>{option.value}</option>
	        ))}
	    </select>
  	);
};

export default Dropdown;