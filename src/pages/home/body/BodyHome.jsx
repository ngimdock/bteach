import React from 'react';

import Banner from "../../../components/marketing/pageSections/home/Banner";
import StudentsSteps from "../../../components/marketing/pageSections/home/StudentsSteps";
import RepeaterDomains from "../../../components/marketing/pageSections/home/RepeaterDomains";
import SearchRepeaterSection from "../../../components/marketing/pageSections/home/SearchRepeaterSection";
import SearchByCity from "../../../components/marketing/pageSections/home/SearchByCity";
import TrainingTypes from "../../../components/marketing/pageSections/home/TrainingTypes";
import StudentsOpinion from "../../../components/marketing/pageSections/home/StudentsOpinion";
import Button from "../../../components/elements/buttons/Button";

import home from "../../../css/home.css"

const BodyHome = () => {
	return(
		<div className="mb-5">
			<Banner />
			<StudentsSteps />
			<RepeaterDomains />
			<div className="flex justify-center">
				<Button  size="small" theme="info" classe="mt-1">Inscription</Button>
			</div>
			<SearchRepeaterSection />
			<SearchByCity />
			<TrainingTypes />
			<StudentsOpinion />
		</div>
	)
}

export default BodyHome