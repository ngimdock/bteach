import React, { useState } from "react";


const RadioButton = ({ items, name, onAddFilter }) => {
	const [location, setLocation] = useState(-1)

	const handleChange = (value) => {
		setLocation(value)

		onAddFilter(name, items[value])
	}

	const handleDisplayRadioStatus = (value) => {
		if (value === location) {
			return true
		}

		return false
	}

	return(
		<div id="radio-group" className="text-gray-500">
			{
				items.map((item, index) => {
					return (
						<label
							key={index}
							className="mx-2 radio_label"
						>
							<input 
								type="radio" 
								checked={handleDisplayRadioStatus(index)} 
								onChange={() => handleChange(index)}
							/>
							<span style={{ marginLeft: 10 }}>
								{ item }
							</span>
						</label>
					)
				})
			}
		</div>
	);
}

export default RadioButton;
