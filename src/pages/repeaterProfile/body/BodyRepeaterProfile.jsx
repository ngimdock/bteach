import React from 'react'
import ImgCircle from '../../../components/elements/imgCircle/ImgCircle'
import style from '../../../css/personalInfoRepeater.module.css'
import Button from '../../../components/elements/buttons/Button'
import H3 from '../../../components/elements/titles/H3'
import RecommandationCarousel from '../../../components/utils/carousels/RecommandationCarousel'

const profilImage = require("../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg")
const imageIllustration = require("../../../medias/illustrations/process1.png")

const ProfileItem = ({ text, color }) => {
	const defaultColor = color ? color : "#00a8e8"

	return (
		<span 
			className={style.profileItem}
			style={{ 
				color: defaultColor, 
				borderWidth: 2, 
				borderColor: defaultColor 
			}}
		>
			{ text }
		</span>
	)
}

const BodyRepeaterProfile = () => {
	return(
		<section className={style.profileContainer}>
			<header className={style.profileHeader}>
				<ImgCircle src={profilImage} alt="profile" classe={style.profileImage} />

				<div className={style.profileInfoSection}>
					<div className={style.profilePersonal}>
						<div className={style.profilePersonalInfo}>
							<span className={style.profileName}>Dilane Kombou</span>
							<span>
								<span className={style.profileLocation}>Yaounde (Nkolbisson)</span>
							</span>
							<span className={style.profileSubject}>Filiere: Physique, Chimie</span>
						</div>

						<div className={style.profileControl}>
							<Button size="medium" classe={`${style.profileBtn} ${style.profileBtnFirst}`}>RECOMMANDER DILANE</Button>
							<Button size="medium" classe={style.profileBtn}>CONTACTER DILANE</Button>
						</div>
					</div>

					<div className={style.profileGeneralInfo}>
						<article className={style.generalInfoItem}>
							<span>Salaire Approximatif</span>
							<span>15 000fcfa/mois</span>
						</article>

						<article className={style.generalInfoItem}>
							<span>Age</span>
							<span>20 ans</span>
						</article>

						<article className={style.generalInfoItem}>
							<span>Niveau Academique</span>
							<span>Bac + 4 Physique</span>
						</article>
					</div>
				</div>
			</header>

			<section className={style.profileContent}>
				
				<H3>Detail de l'offre de repetition</H3>

				<div className={style.profileContentItems}>
					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Matieres
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Physique" />
							<ProfileItem text="Mathematique" />
							<ProfileItem text="Chimie" />
							<ProfileItem text="Anglais" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Niveau Scolaire
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Primaire" color="#e00045" />
							<ProfileItem text="Secondaire" color="#e00045" />
							<ProfileItem text="Universite" color="#e00045" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Type de cours
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Cours individuelle" color="#04e762" />
							<ProfileItem text="Cours en groupe" color="#04e762" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Lieu du cours
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Chez eleve" color="#f77f00" />
							<ProfileItem text="Chez enseignant" color="#f77f00" />
							<ProfileItem text="En ligne" color="#f77f00" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Profession actuelle
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Etudiant en Physique" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Description
						</span>

						<div className={style.profileContentItemBody}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et libero esse earum 
							autem? Aperiam, id repellendus sed ad recusandae ab obcaecati. Eligendi, sequi? Commodi voluptatum
							ut ea vero nesciunt?
						</div>
					</article>

					<H3 classe="mt-20">Les recommandations du repetiteur (4)</H3>

					<RecommandationCarousel />
				</div>

				<ImgCircle 
					classe={style.profileContentIllustration} 
					src={imageIllustration} 
					alt="illustration"
				/>

			</section>
		</section>
	)
}

export default BodyRepeaterProfile