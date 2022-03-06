import React from "react";

import RectangularLink from "./elements/RectangularLink";



const TrainingTypes = () => {

	return(

		<div className="container_sections_home">

			<div className="grid lg:grid-cols-3 gap-4 place-content-center">

				<RectangularLink link="">Formation primaire</RectangularLink>
				<RectangularLink link="">Formation secondaire</RectangularLink>
				<RectangularLink link="">Formation université</RectangularLink>
				<RectangularLink link="">Formation spécialisée</RectangularLink>

			</div>

		</div>

	);
}

export default TrainingTypes;