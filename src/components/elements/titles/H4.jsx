import React from 'react';

const H4 = (props) => {

  const {
      children,
      color,
      classe
  }=props;

  let colorH4

  colorH4 = color ? color : "text-dark"

  return (
    <h4 className={`
      ${classe}
      ${ colorH4 }
      text-base md:text-lg lg:text-xl
      font-extrabold 
      font-primary
    `}>
      {children}
    </h4>
  );  
}

export default H4;
