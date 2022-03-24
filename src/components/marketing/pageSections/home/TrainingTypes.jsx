import React, { useContext, useState } from "react";

import RectangularLink from "./elements/RectangularLink";
import Container from "../../../utils/Container"
import searchContext from "../../../../dataManager/context/searchContext";
import { Navigate } from "react-router-dom";


const TrainingTypes = () => {
	// Get global state
	const { addFilters } = useContext(searchContext)

	// Set local state
	const [redirectToSearch, setRedirectToSearch] = useState(false)

	const handleAddFilter = (value) => {
		const filter = {
			id: 1,
			type: "niveau",
			value
		}

		addFilters([filter])
		setRedirectToSearch(true)
	}

	return(

		<Container classe="mt-20 md:mt-32 flex justify-center ">
			<div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-y-8">
				<RectangularLink link="#" onClick={() => handleAddFilter("primaire")}>Formation primaire</RectangularLink>
				<RectangularLink link="#" onClick={() => handleAddFilter("secondaire")}>Formation secondaire</RectangularLink>
				<RectangularLink link="#" onClick={() => handleAddFilter("université")}>Formation université</RectangularLink>
				{/* <RectangularLink link="" className="block mx-auto">Formation spécialisée</RectangularLink> */}
			</div>

			{
				redirectToSearch && <Navigate to="/search/repeaters" />
			}
		</Container>

	);
}

export default TrainingTypes;