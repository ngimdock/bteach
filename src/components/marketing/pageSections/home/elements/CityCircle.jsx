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
	else if(color === "red"){
		background = "bg-red-700";
	}
	else if(color === "primary"){
		background = "bg-primary";
	}
	else{
		background = "bg-secondary";
	}


	return(

		<div className="DomainCard mx-auto">

			<div className={`${background} lg:py-12 py-5 lg:px-10 px-6 rounded-circle`}>
				<p className="font-medium text-2xl text-white">{name}</p>
			</div>
			
		</div>

	);
}

export default CityCircle;