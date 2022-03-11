import React from "react";

const Radio = ({ name, state, value, handleChange }) => (
  <div className="mr-3">
    <input
      className="after:mr-2"
      type="radio"
      name={name}
      id={value}
      value={value}
      checked={state === value}
      onChange={(e) => handleChange(e)}
    />
    <label htmlFor={value} className="pl-2 capitalize">
      {value}
    </label>
  </div>
);
export default Radio;
