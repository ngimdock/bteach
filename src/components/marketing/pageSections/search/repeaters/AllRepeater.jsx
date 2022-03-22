import React from "react";

import RepeaterCard from "../elements/RepeaterCard";
import businessWoman from "../../../../../medias/photos/african-american-business-woman-by-window (1) (1).jpg"


const AllRepeater = ({ filters }) => {

	return(

		<div className="my-5 grid lg:grid-cols-3 md:grid-cols-2">
			<RepeaterCard
				photo = {businessWoman}
				salary = "20 000"
				age = "23"
				city = "Yaounde"
				street = "Mimboman"
				canMove = "True"
				discipline = "Mathematique, physique, chimie"
				courseLocation = "chez élève, chez prof, en ligne"
			/>
		</div>

	);
}

export default AllRepeater;