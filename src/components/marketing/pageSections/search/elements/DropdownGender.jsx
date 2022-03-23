import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownGenders = ({ onAddFilter }) => {

	const options = [
		{ value: 'Sexe' },
		{ value: 'Masculin' },
		{ value: 'Féminin' },
	];

	const [value, setValue] = useState('Sexe');

	const handleChange = (event) => {
		const value = event.target.value
		setValue(value);

		if (value !== "Sexe")
			onAddFilter("sexe", value)
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

export default DropdownGenders;