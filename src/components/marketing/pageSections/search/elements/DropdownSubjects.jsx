import React, {useState} from "react";
import Dropdown from "./Dropdown";

const DropdownSubjects = ({ onAddFilter }) => {

	const options = [
		{ value: 'Matières' },
		{ value: 'Informatique' },
		{ value: 'Mathématique' },
		{ value: 'Chimie' },
		{ value: 'Physique' },
		{ value: 'Anglais' },
		{ value: 'Français' },
		{ value: 'Allemand' },
		{ value: 'Espagnol' },
		{ value: 'Philosophie' },
		{ value: 'Arabe' },
		{ value: 'Sport' },
		{ value: 'Histoire-géographie' },
		{ value: 'Entreprenariat' },
		{ value: 'Marketing' },
		{ value: 'Economie' },
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