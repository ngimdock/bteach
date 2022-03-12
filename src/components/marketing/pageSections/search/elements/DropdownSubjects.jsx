import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownSubjects = () => {

	const options = [
		{ value: 'Matières' },
		{ value: 'Informatique' },
		{ value: 'Mathématique' },
	];

	const [value, setValue] = useState('Matières');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
		  <Dropdown
		    options={options}
		    value={value}
		    onChange={handleChange}
		  />
		</div>
	);
};

export default DropdownSubjects;