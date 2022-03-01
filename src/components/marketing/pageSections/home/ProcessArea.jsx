import React from "react"

import Container from "../../../utils/Container"
import Paragraphe from "../../../elements/p/Paragraphe"
import Button from "../../../elements/buttons/Button"
import InputText from "../../../elements/inputs/InputText"
import Input from "../../../elements/inputs/Input"
import H1 from "../../../elements/titles/H1"
import H2 from "../../../elements/titles/H2"
import H3 from "../../../elements/titles/H3"

const ProcessArea = () => {

	return(
		<section>
			<Container>
				
				<H1 color="text-secondary" size="big">Ceci est le h1 du site</H1>
				<H2 >Ceci est le h2 du site</H2>
				<H3 color="text-primary">Ceci est h3 du site</H3>
				<Paragraphe>Ceci est le paragraphe du site</Paragraphe>
				<Button  size="big">grand Button</Button>
				<Button  size="medium" theme="red">Button moyen</Button>
				<Button  size="small" theme="dark">Petit button</Button>
				<Input
					placeholder="recherche" 
				/>
				<InputText
					placeholder="essayez prof de maths terminale"
				/> 
			</Container>
		</section>
	)
}

export default ProcessArea