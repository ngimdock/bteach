import React, { useContext } from "react";

import RepeaterCard from "../elements/RepeaterCard";
import serviceContext from "../../../../../dataManager/context/servicesContext";


const AllRepeater = ({ filters }) => {
	// Get data from the global state
	const { services } = useContext(serviceContext)

	return(

		<div className="my-5 grid lg:grid-cols-3 md:grid-cols-2">
			{
				services.map(service => {
					console.log(service.getOwner)
					return (
						<RepeaterCard
							key={service.getId}
							data={service}
						/>
					)
				})
			}
		</div>

	);
}

export default AllRepeater;