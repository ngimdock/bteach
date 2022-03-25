import React from "react";
import MultiRangeSlider from "./MultiRangeSlider";


const PricePerMonth = () => {
  return (
    <MultiRangeSlider
      min={15000}
      max={100000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
  );
};

export default PricePerMonth;