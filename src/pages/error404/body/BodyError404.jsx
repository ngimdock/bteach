import React from 'react'
import Button from '../../../components/elements/buttons/Button'
import style from '../../../css/error.module.css'

const BodyError404 = () => {
	return(
		<section className={style.errorContainer}>
			<p className={style.errorTitle}>404 - On dirait que vous êtes perdu</p>

			<span className={style.errorDescription}>
				Désolé la page à laquelle vous voulez accéder n'existe pas ou a été retiré.
				Vous pouvez retourner à la page d'accueil.
			</span>

			<Button className={style.errorBtn} link="/" size="small">Accueil</Button>
		</section>
	)
}

export default BodyError404