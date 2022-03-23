import React from 'react';

import Banner from "../../../components/marketing/pageSections/home/Banner";
import StudentsSteps from "../../../components/marketing/pageSections/home/StudentsSteps";
import RepeaterDomains from "../../../components/marketing/pageSections/home/RepeaterDomains";
import SearchRepeaterSection from "../../../components/marketing/pageSections/home/SearchRepeaterSection";
import SearchByCity from "../../../components/marketing/pageSections/home/SearchByCity";
import TrainingTypes from "../../../components/marketing/pageSections/home/TrainingTypes";
import StudentsOpinion from "../../../components/marketing/pageSections/home/StudentsOpinion";
import Button from "../../../components/elements/buttons/Button";
import Container from "../../../components/utils/Container";

import home from "../../../css/home.css"
import ProcessArea from '../../../components/marketing/pageSections/home/ProcessArea';

const BodyHome = () => {
	return(
		<Container className="mb-5">
			<Banner />
			<StudentsSteps />
			<RepeaterDomains />
			<SearchRepeaterSection />
			<SearchByCity />
			<TrainingTypes />
			<StudentsOpinion />
			<ProcessArea />
		</Container>
	)
}

export default BodyHome