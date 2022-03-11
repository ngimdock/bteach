import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownSubjects = () => {

	const options = [
		{ value: 'Sexe' },
		{ value: 'Masculin' },
		{ value: 'Féminin' },
	];

	const [value, setValue] = useState('Sexe');

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