import React from "react"
import { FaBars } from "react-icons/fa"
import style from '../../../css/base.module.css'
import ALink from "../../elements/a/ALink"
import Button from "../../elements/buttons/Button"

const Navbar = () => {

	return(
		<header className={style.navbar}>
			<span className={style.navbarLogo}>Bteach</span>

			<div className={style.navbarNavigation}>
				<nav className={style.navbarNav}>
					<ALink classe={style.navbarNavLink} link="#">Les repetiteurs</ALink>
				</nav>

				<Button size="medium" classe={style.navbarBtnSignin}>CONNEXION</Button>
				<Button size="medium" classe={style.navbarBtnSignup}>INSCRIPTION</Button>
			</div>

			<div className={style.navbarIconMenu}>
				<FaBars />
			</div>
		</header>
	)
}

export default Navbar