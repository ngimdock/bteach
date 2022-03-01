import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {

	let {
		children,
		link,
		size,
		color,
		theme,
		classe,
		target,
		rounded,
		action
	} = props


 	// BACKFROUND
 	let background, backgroundHover, textColor

 	if(theme === "info"){
 		background = "bg-blue-600 hover:bg-blue-700"
 	}
 	else if(theme === "sucess"){
 		background = "bg-green-600 hover:bg-green-700"
 	}
 	else if(theme === "danger"){
 		background = "bg-red-500 hover:bg-red-700"
 	}
 	else if(theme === "dark"){
 		background = "bg-dark hover:bg-dark-hover"
 	}
 	else if(theme === "red"){
 		background = "bg-secondary hover:bg-secondary-hover"
 	}
 	else{
 		background = "bg-primary hover:bg-primary-hover"
 	}


 	//SIZE
 	  /* SIZE */
  let textSize, padding;

  if ( size === "small"){
    textSize = "text-xs"
    padding = "py-3 px-5"
  }
  else if (size === "medium") {
    textSize = "text-xs md:text-sm"
    padding = "py-3 px-5 md:py-4 md:px-8"
  }
  else if (size === "big") {
    textSize = "text-sm md:text-base"
    padding = "py-4 px-6 md:py-5 md:px-10"
  }
  else {
    textSize = "text-xs md:text-sm "
    padding = "py-3 px-5 md:py-4 md:px-8"
  }

  /* Rounded */
  let radius ;
  radius = rounded ? rounded : "rounded-full"

  if(!link) link = "#/"
	return(
		<Link 
			to={link} 
			target={target}
			onClick={ action ? (e) => action(e) : null}
			className={`${classe} ${radius} ${padding} ${textSize} ${background} ${backgroundHover} ${textColor} inline-block uppercase md:tracking-wider text-white animate-moyen font-primary`}
				>
			{ children }
		</Link>
	)
}

export default Button