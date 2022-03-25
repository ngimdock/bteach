import React, { useContext, useState } from "react"
import style from '../../../css/base.module.css'
import ALink from "../../elements/a/ALink"
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import searchContext from "../../../dataManager/context/searchContext"
import { Navigate } from "react-router-dom"

const Footer = () => {
	// Get global state
	const { addFilters } = useContext(searchContext)

	// Set local state
	const [redirectToSearch, setRedirectToSearch] = useState(false)

	const handleAddFilter = (value) => {
		const filter = {
			id: 1,
			type: "niveau",
			value
		}

		addFilters([filter])
		setRedirectToSearch(true)
	}

	return(
		<footer className={`${style.footer} mt-20 md:mt-32` }>
			<div className={style.footerOne}>
				<div className={style.footerTwo}>
					<span className={style.footerTitle}>Type répétiteurs</span>

					<nav className={style.footerNav}>
						<ALink onClick={() => handleAddFilter("primaire")} classe={style.footerNavLink} link="#">Repetiteurs Primaire</ALink>
						<ALink onClick={() => handleAddFilter("secondaire")} classe={style.footerNavLink} link="#">Repetiteurs Secondaire</ALink>
						<ALink onClick={() => handleAddFilter("université")} classe={style.footerNavLink} link="#">Repetiteurs Universite</ALink>
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

			{
				redirectToSearch && <Navigate to="/search/repeaters" />
			}
		</footer>
	)
}

export default Footer