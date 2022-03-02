import React from 'react'
import ImgCircle from '../../../components/elements/imgCircle/ImgCircle'
import style from '../../../css/personalInfoRepeater.module.css'
import Button from '../../../components/elements/buttons/Button'

const profilImage = require("../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg")

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
				Content
			</section>
		</section>
	)
}

export default BodyRepeaterProfile