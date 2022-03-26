import React, { useContext, useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import style from '../../../css/base.module.css'
import currentUserContext from "../../../dataManager/context/currentUserContext"
import ALink from "../../elements/a/ALink"
import Button from "../../elements/buttons/Button"
import ImgCircle from "../../elements/imgCircle/ImgCircle"
import NavbarProfilDropdown from "../../utils/dropdowns/NavbarProfileDropdown"
import ChooseTypeOfSignupForm from "../../utils/modals/ChooseTypeOfSignupForm"
import MobileMenu from "./MobileMenu"

const Navbar = ({ onOpenModal }) => {
	// Set local state
	const [mobileMenuDisplayed, setMobileMenuDisplayed] = useState(false)
	const [backgroundMenuBlackVisible, setBackgroundMenuBlackVisible] = useState(false)

	// Get global state
	const { currentUser } = useContext(currentUserContext)

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
				<nav className={`${style.navbarNav}`} style={{marginRight: 30}}>
					<ALink classe={style.navbarNavLink} link="/search/repeaters">Les repetiteurs</ALink>
				</nav>

				{
					!currentUser ? (
						<>
							<Button size="medium" link="/sign_in" classe={style.navbarBtnSignin}>CONNEXION</Button>
							<Button size="medium" action={onOpenModal} classe={style.navbarBtnSignup}>INSCRIPTION</Button>
						</>
					):(
						<NavbarProfilDropdown
							dropElt={
								<div className={style.navbarProfile}>
									<span className={`${style.navbarProfileName} text-bold`}>{ `${currentUser.getFullName}` }</span>
									<ImgCircle 
										classe={style.navbarProfileImage} 
										src={currentUser.getProfilePic} 
										alt={currentUser.getFullName} 
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