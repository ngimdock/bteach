import React, {useState} from "react";
import Dropdown from "./Dropdown";


const DropdownSortby = () => {

	const options = [
		{ value: 'Trier par pertinence' },
		{ value: 'Trier par tarif mensuel' },
		{ value: 'Trier par nombre de recommendations' },
		{ value: 'Trier par age' },
	];

	const [value, setValue] = useState('Trier par pertinence');

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

export default DropdownSortby;