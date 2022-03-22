import React from "react";

import H3 from "../../../elements/titles/H3";
import DomainCard from "./elements/DomainCard";
import youngMan from "../../../../medias/photos/young-african-man-standing-isolated (1) (1).jpg"
import gabrielMatula from "../../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg"
import businessWoman from "../../../../medias/photos/african-american-business-woman-by-window (1) (1).jpg"
import blackMan from "../../../../medias/photos/smiling-sporty-black-man-standing-with-his-arms-crossed (1) (2).jpg"
import africanWomen from "../../../../medias/photos/africanWomen.jpg"
import handsomeMan from "../../../../medias/photos/handsome-young-man-dressed-shirt (1) (1).jpg"
import stylish from "../../../../medias/photos/stylish-black-girl (1) (1).jpg"
import shallow from "../../../../medias/photos/shallow-focus-shot-young-black-male-grey-wall (1).jpg"
import Container from '../../../utils/Container';

const RepeaterDomains = () => {

	return(
		<Container>
			<div className="container_sections_home">

				<H3 classe="text-center font-medium text-gray-500">Les domaines des répétiteurs les plus cherchés</H3>
				<div className="my-5 py-2"></div>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-5 md:gap-x-5">
					<DomainCard
						image={youngMan}
						discipline="Prof de math 3ieme, 1ere et Tle Serie A, D, C"
					/>
					<DomainCard
						image={gabrielMatula}
						discipline="Prof de physique chimie 3ieme, 1ere et Tle Serie A, D, C"
					/>
					<DomainCard
						image={businessWoman}
						discipline="Prof d'anglais, de 6ieme en Tle, Serie A, C, D, E"
					/>
					<DomainCard
						image={blackMan}
						discipline="Prof algebre & analyse de L1 à L3"
					/>


					<DomainCard
						image={africanWomen}
						discipline="Prof info de 3e en Tle Serie D, C, TI"
					/>
					<DomainCard
						image={handsomeMan}
						discipline="Prof de l'école primaire"
					/>
					<DomainCard
						image={stylish}
						discipline="Prof chimie & biochimie de L1 à L3"
					/>
					<DomainCard
						image={shallow}
						discipline="Prof de PCT de 6e en 3e"
					/>
				</div>

			</div>
		</Container>
	);
}

export default RepeaterDomains;