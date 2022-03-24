import React from 'react';

import Banner from "../../../components/marketing/pageSections/home/Banner";
import StudentsSteps from "../../../components/marketing/pageSections/home/StudentsSteps";
import RepeaterDomains from "../../../components/marketing/pageSections/home/RepeaterDomains";
import SearchRepeaterSection from "../../../components/marketing/pageSections/home/SearchRepeaterSection";
import SearchByCity from "../../../components/marketing/pageSections/home/SearchByCity";
import TrainingTypes from "../../../components/marketing/pageSections/home/TrainingTypes";
import StudentsOpinion from "../../../components/marketing/pageSections/home/StudentsOpinion";
import "../../../css/home.css"

const BodyHome = () => {
	return(
		<>
			<Banner />
			<StudentsSteps />
			<RepeaterDomains />
			<SearchRepeaterSection />
			<SearchByCity />
			<TrainingTypes />
			<StudentsOpinion />
		</>
	)
}

export default BodyHome