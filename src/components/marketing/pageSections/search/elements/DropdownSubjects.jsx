import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownSubjects = ({ onAddFilter }) => {

	const options = [
		{ value: 'Matières' },
		{ value: 'Informatique' },
		{ value: 'Mathématique' },
	];

	const [value, setValue] = useState('Matières');

	const handleChange = (event) => {
		const value = event.target.value
		setValue(value);

		if (value !== "Matières")
			onAddFilter("matiere", value)
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