import React from 'react';

const H2 = (props) => {

  const {
      children,
      color,
      classe
  }=props;

  let colorH2

  colorH2 = color ? color : "text-dark"

  return (
    <h2 className={`
      ${classe}
      ${ colorH2 }
      text-2xl md:text-3xl lg:text-4xl
      font-extrabold 
      font-primary
    `}>
      {children}
    </h2>
  );  
}

export default H2;
