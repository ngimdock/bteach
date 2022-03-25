import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import searchContext from "../../../../../dataManager/context/searchContext";


const CityCircle = (props) => {
	// Get global state
	const { addFilters } = useContext(searchContext)

	// Set local state
	const [redirectToSearchRepeater, setRedirectToSearchRepeater] = useState(false)

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

	const handleAddFilter = () => {
		const filter = {
			id: 1,
			type: "ville",
			value: name
		}

		addFilters([filter])

		setRedirectToSearchRepeater(true)
	}

	return(
		<div onClick={handleAddFilter} className={`${background} w-32 h-32 p-0 md:p-20 rounded-full flex justify-center items-center text-center hover:opacity-90 transition ease-in-out duration-300 cursor-pointer `}>
			<p className="lg:text-xl text-base text-white font-medium">{name}</p>

			{
				redirectToSearchRepeater && <Navigate to="/search/repeaters" />
			}
		</div>
	);
}

export default CityCircle;