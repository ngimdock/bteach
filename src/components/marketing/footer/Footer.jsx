import React from "react"
import style from '../../../css/base.module.css'
import ALink from "../../elements/a/ALink"
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {

	return(
		<footer className={style.footer}>
			<div className={style.footerOne}>
				<div className={style.footerTwo}>
					<span className={style.footerTitle}>Type repetiteurs</span>

					<nav className={style.footerNav}>
						<ALink classe={style.footerNavLink} link="#">Repetiteurs Primaire</ALink>
						<ALink classe={style.footerNavLink} link="#">Repetiteurs Secondaire</ALink>
						<ALink classe={style.footerNavLink} link="#">Repetiteurs Universite</ALink>
					</nav>
				</div>
				<div className={style.footerTwo}>
					<span className={style.footerTitle}>A propos</span>

					<nav className={style.footerNav}>
						<ALink classe={style.footerNavLink} link="#">Notre equipe</ALink>
						<ALink classe={style.footerNavLink} link="#">Nos valeurs</ALink>
						<ALink classe={style.footerNavLink} link="#">Nos references</ALink>
					</nav>
				</div>
			</div>
			<div className={style.footerOne}>
				<div className={style.footerTwo}>
					<span className={style.footerTitle}>Politique</span>

					<nav className={style.footerNav}>
						<ALink classe={style.footerNavLink} link="#">Condition d'utilisation</ALink>
						<ALink classe={style.footerNavLink} link="#">Politique de confidentialite</ALink>
					</nav>
				</div>
				<div className={style.footerTwo}>
					<span className={style.footerLogo}>Bteach</span>

					<nav className={style.footerNavIcons}>
						<span className={style.footerSocialIcon}>
							<BsFacebook />
						</span>

						<span className={style.footerSocialIcon}>
							<BsTwitter />
						</span>

						<span className={style.footerSocialIcon}>
							<BsLinkedin />
						</span>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer