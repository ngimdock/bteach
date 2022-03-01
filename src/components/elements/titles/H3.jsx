import React from 'react';

const H3 = (props) => {

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
      text-xl md:text-2xl lg:text-3xl
      font-extrabold 
      font-primary
    `}>
      {children}
    </h2>
  );  
}

export default H3;
