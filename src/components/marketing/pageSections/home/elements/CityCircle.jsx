import React from "react";


const CityCircle = (props) => {

	let {
		name,
		color
	} = props;

	let background;

	if(color === "dark"){
		background = "bg-dark";
	}
	else if(color === "danger"){
		background = "bg-red-500";
	}
	else if(color === "secondary"){
		background = "bg-secondary";
	}
	else if(color === "primary"){
		background = "bg-primary";
	}
	else{
		background = "bg-black";
	}


	return(
		<div className={`${background} w-32 h-32 p-0 md:p-20 rounded-full flex justify-center items-center text-center hover:opacity-90 transition ease-in-out duration-300 cursor-pointer `}>
			<p className="lg:text-xl text-base text-white font-medium">{name}</p>
		</div>
	);
}

export default CityCircle;