import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import style from '../../../css/base.module.css'
import ALink from "../../elements/a/ALink"
import Button from "../../elements/buttons/Button"
import ImgCircle from "../../elements/imgCircle/ImgCircle"
import NavbarProfilDropdown from "../../utils/dropdowns/NavbarProfileDropdown"
import MobileMenu from "./MobileMenu"

const profilImage = require('../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg')

const Navbar = () => {
	const [mobileMenuDisplayed, setMobileMenuDisplayed] = useState(false)
	const [backgroundMenuBlackVisible, setBackgroundMenuBlackVisible] = useState(false)

	// UseEffect section

	// Handle mobile menu
	useEffect(() => {
		let timer = 0

		if (!mobileMenuDisplayed) {
			timer = setTimeout(() => {
				setBackgroundMenuBlackVisible(false)
			}, 600)
		}

		return () => clearTimeout(timer)
	}, [mobileMenuDisplayed])

	// Handle window resizing
	useEffect(() => {
		window.addEventListener("resize", handleWindowResizing)

		return () => window.removeEventListener("resize", handleWindowResizing)
	}, [])

	/* Handler Methodes section */

	// Handle window Resizing
	const handleWindowResizing = () => {
		const windowWidth = window.innerWidth

		if (windowWidth >= 575) {
			setMobileMenuDisplayed(false)
		}
	}

	// Handle mobile menu display
	const handleShowMobileMenu = () => {
		setMobileMenuDisplayed(prev => {
			if (!prev) {
				setBackgroundMenuBlackVisible(true)
			}

			return !prev
		})
	}

	return(
		<header className={style.navbar}>
			<Link to="/">
				<span className={style.navbarLogo}>Bteach</span>
			</Link>

			<div className={style.navbarNavigation}>
				<nav className={style.navbarNav}>
					<ALink classe={style.navbarNavLink} link="#">Les repetiteurs</ALink>
				</nav>

				{
					!true ? (
						<>
							<Button size="medium" link="/sign_in" classe={style.navbarBtnSignin}>CONNEXION</Button>
							<Button size="medium" link="/client/sign_up" classe={style.navbarBtnSignup}>INSCRIPTION</Button>
						</>
					):(
						<NavbarProfilDropdown
							dropElt={
								<div className={style.navbarProfile}>
									<span className={style.navbarProfileName}>Dilane kombou</span>
									<ImgCircle 
										classe={style.navbarProfileImage} 
										src={profilImage} 
										alt="dilane kombou" 
									/>
								</div>
							}
						/>
					)
				}
			</div>

			<div 
				className={style.navbarIconMenu}
				onClick={handleShowMobileMenu}	
			>
				<FaBars />
			</div>

			<MobileMenu 
				show={mobileMenuDisplayed}
				onHide={handleShowMobileMenu}	
			/>

			{
				backgroundMenuBlackVisible && (
					<span 
						className={`
							${style.backgroundMenuBlack} 
							${!mobileMenuDisplayed ? style.backgroundMenuBlackTransition : ''
						}`}
						onClick={handleShowMobileMenu}
					/>
				)
			}
		</header>
	)
}

export default Navbar