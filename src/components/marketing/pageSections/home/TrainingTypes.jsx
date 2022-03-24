import React from "react";

import RectangularLink from "./elements/RectangularLink";
import Container from "../../../utils/Container"


const TrainingTypes = () => {

	return(

		<Container classe="mt-20 md:mt-32 flex justify-center ">
			<div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-y-8">
				<RectangularLink link="">Formation primaire</RectangularLink>
				<RectangularLink link="">Formation secondaire</RectangularLink>
				<RectangularLink link="">Formation université</RectangularLink>
				<RectangularLink link="" className="block mx-auto">Formation spécialisée</RectangularLink>
			</div>
		</Container>

	);
}

export default TrainingTypes;