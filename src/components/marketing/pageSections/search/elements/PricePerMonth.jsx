import React from "react";
import MultiRangeSlider from "./MultiRangeSlider";


const PricePerMonth = ({ onGetFilter }) => {
	return (
		<MultiRangeSlider
			min={10000}
			max={100000}
			onGetFilter={onGetFilter}
		/>
	);
};

export default PricePerMonth;