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
    <h3 className={`
      ${classe}
      ${ colorH2 }
      text-xl md:text-2xl lg:text-3xl
      font-extrabold 
      font-primary
    `}
      style={{ color: color ? color:"" }}
    >
      {children}
    </h3>
  );  
}

export default H3;
