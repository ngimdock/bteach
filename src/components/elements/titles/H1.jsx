import React from 'react';

const H1 = (props) => {

  const {
      children, 
      size,
      color,
      classe
  }=props;

  let sizeH1, colorH1

  if(size==="big") sizeH1 ="text-3xl md:text-4xl lg:text-5xl traking md:leading-tight lg:leading-tight"
  else sizeH1="text-2xl md:text-3xl lg:text-4xl"

  colorH1 = color ? color : "text-white"

  return (
    <h1 className={`
      ${ sizeH1 }
      ${ colorH1 }
      ${classe}
      font-extrabold 
      font-primary
    `}>
      {children}
    </h1>
  );  
}

export default H1;
