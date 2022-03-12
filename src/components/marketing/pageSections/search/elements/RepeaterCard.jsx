import React from "react";

const RepeaterCard = (props) => {

	let {
		photo,
		salary,
		age,
		city,
		street,
		discipline,
		canMove,
		courseLocation
	} = props

	if(canMove === "True")
		canMove = "Peut se déplacer";
	else
		canMove = "Ne peut se déplacer";

	return(

		<div className="RepeaterCard mx-3 my-3">
			
			<div className="top_part w-full">
				<div className="card_repeater">
					<div className="mt-8 ml-8">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
						</svg>
					</div>
					<div className="flex justify-end d_bottom_right">
						<div className="p-1 px-3 border border-1 border-white w_max_content">
							<p>{salary}cfa/mois</p>
						</div>
						<div className="p-1 px-3 mx-3 border border-1 border-white w_max_content">
							<p>{age} ans</p>
						</div>
					</div>
				</div>
				<img src={photo} alt="Profile" />
			</div>

			<div className="bottom_part p-5">
				<div className="flex">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					  	<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
					 	<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<p className="ml-3">{city}({street})</p>
				</div>
				<div className="flex mt-3">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					  	<path d="M12 14l9-5-9-5-9 5 9 5z" />
					 	<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
					</svg>
					<p className="ml-3">{discipline}</p>
				</div>
				<div className="flex mt-3">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					  	<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<p className="ml-3">{canMove}</p>
				</div>
				<div className="p-1 px-3 border border-1 border-white mt-4 w_max_content">
					<p>{courseLocation}</p>
				</div>
			</div>

		</div>

	);
}

export default RepeaterCard;