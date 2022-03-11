import React from "react";

import ClientCard from "../elements/ClientCard";
import stylish from "../../../../../medias/photos/stylish-black-girl (1) (1).jpg";


const AllClients = () => {

	return(

		<div className="my-5 grid lg:grid-cols-3 md:grid-cols-2">
			
			<ClientCard
				photo = {stylish}
				city = "Yaounde"
				street = "Mimboman"
				name = "Gaëlle Tamho"
				classe = "Première C"
				discipline = "Mathematique, physique, chimie"
				description = "Je cherche un repétiteur très compétent pour me permettre de valider mon examen"
			/>
			<ClientCard
				photo = {stylish}
				city = "Yaounde"
				street = "Etoa Meki"
				name = "Gaëlle Tamho"
				classe = "Première C"
				discipline = "Mathematique, physique, chimie"
				description = "Je cherche un repétiteur très compétent pour me permettre de valider mon examen"
			/>
			<ClientCard
				photo = {stylish}
				city = "Douala"
				street = "bonanjo"
				name = "Gaëlle Tamho"
				classe = "Première C"
				discipline = "Mathematique, physique, chimie"
				description = "Je cherche un repétiteur très compétent pour me permettre de valider mon examen"
			/>
			<ClientCard
				photo = {stylish}
				city = "Douala"
				street = "bonanjo"
				name = "Gaëlle Tamho"
				classe = "Première C"
				discipline = "Mathematique, physique, chimie"
				description = "Je cherche un repétiteur très compétent pour me permettre de valider mon examen"
			/>
			<ClientCard
				photo = {stylish}
				city = "Yaounde"
				street = "Essos"
				name = "Gaëlle Tamho"
				classe = "Première C"
				discipline = "Mathematique, physique, chimie"
				description = "Je cherche un repétiteur très compétent pour me permettre de valider mon examen"
			/>
			<ClientCard
				photo = {stylish}
				city = "Yaounde"
				street = "Etoa Meki"
				name = "Gaëlle Tamho"
				classe = "Première C"
				discipline = "Mathematique, physique, chimie"
				description = "Je cherche un repétiteur très compétent pour me permettre de valider mon examen"
			/>

		</div>

	);
}

export default AllClients;