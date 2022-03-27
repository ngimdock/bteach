import React from "react";

const Checkbox = ({ text, htmlFor, name, handleChange }) => {
  return (
    <div className="block md:inline-block">
      <input
        id={htmlFor}
        type="checkbox"
        name={name}
        value={text}
        className="mb-3 form-checkbox h-4 w-4 text-red-500 transition duration-150 ease-in-out"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={htmlFor} className="ml-2 mr-4 text-sm check">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
