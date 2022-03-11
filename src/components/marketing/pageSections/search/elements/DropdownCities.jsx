import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownCities = () => {

	const options = [
		{ value: 'Villes' },
		{ value: 'Yaoundé' },
		{ value: 'Douala' },
		{ value: 'Baffoussam' },
		{ value: 'Maroua' },
	];

	const [value, setValue] = useState('Villes');

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

export default DropdownCities;