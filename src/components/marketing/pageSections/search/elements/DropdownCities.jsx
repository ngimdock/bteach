import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownCities = ({ onAddFilter }) => {

	const options = [
		{ value: 'Villes' },
		{ value: 'Yaoundé' },
		{ value: 'Douala' },
		{ value: 'Baffoussam' },
		{ value: 'Maroua' },
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