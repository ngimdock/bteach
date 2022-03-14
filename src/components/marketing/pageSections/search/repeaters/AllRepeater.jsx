import React from "react";

import Pagination from "../elements/Pagination";

import RepeaterCard from "../elements/RepeaterCard";
import businessWoman from "../../../../../medias/photos/african-american-business-woman-by-window (1) (1).jpg"
import handsomeMan from "../../../../../medias/photos/handsome-young-man-dressed-shirt (1) (1).jpg";
import stylish from "../../../../../medias/photos/stylish-black-girl (1) (1).jpg";
import shallow from "../../../../../medias/photos/shallow-focus-shot-young-black-male-grey-wall (1).jpg";
import blackMan from "../../../../../medias/photos/smiling-sporty-black-man-standing-with-his-arms-crossed (1) (2).jpg";
import gabrielMatula from "../../../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg"


const AllRepeater = () => {

	return(

		<div>

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
				<RepeaterCard
					photo = {handsomeMan}
					salary = "50 000"
					age = "25"
					city = "Yaounde"
					street = "Etoa Meki"
					canMove = "False"
					discipline = "Mathematique, physique, chimie"
					courseLocation = "chez élève, chez prof, en ligne"
				/>
				<RepeaterCard
					photo = {stylish}
					salary = "200 000"
					age = "30"
					city = "Douala"
					street = "bonanjo"
					canMove = "True"
					discipline = "Mathematique, physique, chimie"
					courseLocation = "chez élève, chez prof, en ligne"
				/>
				<RepeaterCard
					photo = {shallow}
					salary = "200 000"
					age = "23"
					city = "Douala"
					street = "bonanjo"
					canMove = "False"
					discipline = "Mathematique, physique, chimie"
					courseLocation = "chez élève, chez prof, en ligne"
				/>
				<RepeaterCard
					photo = {gabrielMatula}
					salary = "70 000"
					age = "25"
					city = "Yaounde"
					street = "Essos"
					canMove = "True"
					discipline = "Mathematique, physique, chimie"
					courseLocation = "chez élève, chez prof, en ligne"
				/>
				<RepeaterCard
					photo = {blackMan}
					salary = "50 000"
					age = "30"
					city = "Yaounde"
					street = "Etoa Meki"
					canMove = "False"
					discipline = "Mathematique, physique, chimie"
					courseLocation = "chez élève, en ligne"
				/>

			</div>

			<Pagination  />

		</div>

	);
}

export default AllRepeater;