import React from "react"
import { CgProfile } from 'react-icons/cg';

import Container from "../../../utils/Container"
import Paragraphe from "../../../elements/p/Paragraphe"
import Button from "../../../elements/buttons/Button"
import BigInput1 from "../../../elements/inputs/BigInput1"
import BigInput2 from "../../../elements/inputs/BigInput2"
import Input from "../../../elements/inputs/Input"
import Checkbox from "../../../elements/inputs/Checkbox"
import H1 from "../../../elements/titles/H1"
import H2 from "../../../elements/titles/H2"
import H3 from "../../../elements/titles/H3"
import CircleText from "../../../utils/CircleText"
import ImgCircle from "../../../elements/imgCircle/ImgCircle"
import photo from "../../../../medias/photos/africanWomen.jpg"

const ProcessArea = () => {


	return(
		<section>
			<Container>
				
				<H1 color="text-secondary" size="big">Ceci est le h1 du site</H1>
				<H2 >Ceci est le h2 du site</H2>
				<H3 color="text-primary">Ceci est h3 du site</H3>
				<Paragraphe>Ceci est le paragraphe du site</Paragraphe>
				<Button  size="big" classe="mt-1">grand Button</Button>
				<Button  size="medium" theme="red" classe="mt-1">Button moyen</Button>
				<Button  size="small" theme="dark" classe="mt-1">Petit button</Button>
				
				<BigInput1
					type="text"
					name="searchRepeater"
					classe="mt-1"
					placeholder="ici c'est le grand input du site"
				/> 

				<BigInput2
					type="text"
					name="searchRepeater"
					classe="mt-1"
					placeholder="un grand input mais avec la loupe"
				/>

				<Input
					type="text"
					name="searchRepeater"
					classe="mt-2"
					placeholder="un input des formulaires avec icone"
					icone={ <CgProfile size="23" /> }
				/>

				<Input
					type="text"
					name="searchRepeater"
					classe="mt-2"
					placeholder="un input des formulaires sans icone"
				/>

				<div className="flex my-3">
					<div className="h-96">
						<ImgCircle
							src={photo}
							alt="text alternatif"
						/>
						<Paragraphe>Ici l'image des profil repetiteurs et clients</Paragraphe>
					</div>

					<div className="w-full h-96">
						<ImgCircle
							src={photo}
							size="small"
							alt="text alternatif"
						/>
						<Paragraphe>ici l'image de la barre de navigation</Paragraphe>
					</div>
				</div>

				<CircleText
					bgCircle="bg-secondary"
					uppercase="yes"
				>
					Yaounde
				</CircleText>

				<CircleText
					bgCircle="bg-primary"
					uppercase="yes"
				>
					Douala
				</CircleText>

				<CircleText
					bgCircle="bg-secondary"
					uppercase="yes"
					size="small"
				>
					1
				</CircleText>
				<Checkbox />
			</Container>
		</section>
	)
}

export default ProcessArea