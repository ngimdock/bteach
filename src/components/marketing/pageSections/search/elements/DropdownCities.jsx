import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownCities = ({ onAddFilter }) => {

	const options = [
		{ value: 'Villes' },
		{ value: 'Yaoundé' },
		{ value: 'Douala' },
		{ value: 'Bafoussam' },
		{ value: 'Ebolowa' },
		{ value: 'Ngoundere' },
		{ value: 'Bertoua' },
		{ value: 'Buea' },
		{ value: 'Bamenda' },
		{ value: 'Kribi' },
		{ value: 'Dschang' },
		{ value: 'Bagangte' },
		{ value: 'Edea' },
	];

	const [value, setValue] = useState('Villes');

	const handleChange = (event) => {
		const value = event.target.value
		setValue(value);

		if (value !== "Villes")
			onAddFilter("ville", value)
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

export default DropdownCities;