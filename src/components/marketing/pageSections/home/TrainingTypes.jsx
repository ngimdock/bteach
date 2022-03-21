import React, { useContext, useEffect } from "react";

import RectangularLink from "./elements/RectangularLink";
import currentUserContext from "../../../../dataManager/context/currentUserContext"
import servicesContext from "../../../../dataManager/context/servicesContext"


const TrainingTypes = () => {

	//   const objUser = {
	//     id: 10, 
	//     name: "ngimdock", 
	//     firstName: "zemfack", 
	//     email: "ngimdock@gmail.com", 
	//     password: "123herz", 
	//     phone: 677109798,
	//     date: "herz ngim", 
	//     sex: "male", 
	//     town: "yaounde", 
	//     district: "bonas", 
	//     profilePic: "photo",
	//     notes: [
	//       {id: 101, stars: 5, message: "note 1 au calme"},
	//       {id: 102, stars: 6, message: "note 2 au calme"},
	//       {id: 103, stars: 7, message: "note 3 au calme"}
	//     ],
	//     feedbacks: [
	// 	    {id: 1, title: "fidback1", message: "contenu de feedback1", date: "09-06=20-202"},
	// 	    {id: 2, title: "fidback2", message: "contenu de feedback2", date: "09-06=20-202"}
	//     ]
	//   }

	//   const objNote = {
	//     id: 20,
	//     stars: 55,
	//     message: "Une autre note..."
	//   }

	//     const objFeedback = {
	// 		id: 123,
	// 		title : "Arnaque d'un repetiteur",
	// 		message : "J'ai paye le repetiteur STEPHANE mais il n'a pas fait son travail, je demande qu'on le bloque",
	// 		date: "09-06-2019"
	// 	}

	// 	 const feedUpdate = {
	// 		title : "non stop",
	// 		message : "petit bandit"
	// 	}

	// 	const objService ={
	// 	    minPrise: 20000,
	// 	    currentGradeLevel: "Bac + 5 maths",
	// 	    teachingUnit : ["Maths", "Physique", "chimie"],
	// 	    levelsUnit : ["primaire", "secondaire", "Universite"],
	// 	    coursesType: ["cours individuel", "cours en groupe"],
	// 	    coursesLocation : ["chez le prof", "chew l'eleve"],
	// 	    description : "je me decrit comme etatnt un tres bon prof pour ton niveau scolaire",
	// 	    documentToCertify: "Le document a certifier"
	// 	}

	// 	const objAnnonce = {
	// 	    classLevel : "Terminale",
	// 	    units : ["Anglais, Philo"],
	// 	    message : "Je cherche un repetiteur"
	// 	  }

	// 	 const objAnnonceUpdate = {
	// 	    classLevel : "premiere",
	// 	    units : ["espagnol"],
	// 	    message : "a la recherche..."
	// 	  }


	// const { 
	// 		currentUser, 
	// 		login,
	// 		logout,
	// 		updateInfo,
	// 		updateProfilePic,
	// 		createNote,
	// 		updateNote,
	// 		deleteNote,

	// 		createFeedback,
	// 		updateFeedback,
	// 		deleteFeedback,

	// 		createService,
	// 		updateService,
	// 		changeServiceVisibility,

	// 		createAnnonce,
	// 		updateAnnonce,
	// 		changeAnnonceVisibility,

	// 		deleteRepeater,
	// 		certifiedRepeater
	// 	 } = useContext(currentUserContext)


	// useEffect(() => {
	// 	login({role: 0, ...objUser})
	// }, [])

	// useEffect(() => {
	// 	console.log(currentUser)

	// }, [currentUser])

	// const handleClick1 = (event) => {
	// 	deleteRepeater(10)
	// }

	// const handleClick2 = (event) => {
	// 	certifiedRepeater(20)
	// }

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