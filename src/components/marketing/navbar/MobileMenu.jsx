import React, { useContext, useState } from 'react'
import { BsX } from 'react-icons/bs'
import style from '../../../css/base.module.css'
import ImgCircle from '../../elements/imgCircle/ImgCircle'
import Button from '../../elements/buttons/Button'
import ALink from '../../elements/a/ALink'
import currentUserContext from '../../../dataManager/context/currentUserContext'
import { Navigate } from 'react-router-dom'
import { firebaseUserLogout } from '../../../api/Users'

const profileImage = require("../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg")

const NavItem = ({ text, link, onClick }) => {
  const defaultLink = link ? link : "#"
  const defaultHandler = onClick ? onClick : () => {}

  return (
    <ALink classe={style.mobileMenuNavItem} link={defaultLink}>
      <span className={style.mobileMenuNavItemText} onClick={defaultHandler}>{ text }</span>
    </ALink>
  )
}

const MobileMenu = ({ show, onHide }) => {
  // Set local state
  const [redirectToProfile, setRedirectToProfile] = useState(false)

  // Get data from the global state
  const { currentUser, logout: userLogout } = useContext(currentUserContext)

  // Logout function
  const logout = async () => {
    try {
      const { data } = await firebaseUserLogout()

      if (data) {
        userLogout()
      } else {
        console.log("error while logout")
      }
    } catch(err) {
      console.log(err)
    }
  }

  // Function that handle the navigation to the profile page
  const handleNavigateToProfile = () => {
    if (currentUser.getRole === 1) {
      setRedirectToProfile(true)
    }
  }

  return (
    <article className={`${style.mobileMenuContainer} ${!show ? style.mobileMenuTransition : ""}`}>
      {
        redirectToProfile && <Navigate to={`/repeater/profile/${currentUser.getId}`} />
      }
      
      <div 
				className={style.navbarIconMenuClose}
				onClick={onHide}	
			>
				<BsX color="#fff" />
			</div>

      <div className={style.mobileMenuHeader}>
        {
          currentUser ? (
            <>
              <ImgCircle classe={style.mobileMenuHeaderImage} src={profileImage} />

              <div className={style.mobileMenuHeaderInfo}>
                <span className={style.mobileMenuHeaderName}>{ `${currentUser.getFirstName} ${currentUser.getName}` }</span>

                <Button onClick={handleNavigateToProfile} classe={style.mobileMenuHeaderInfoBtn}>Editer le profil</Button>
              </div>
            </>
          ):(
            <div className={style.mobildeMenuLoginSection}>
              <span className={style.mobileMenuLoginText}>Authentifiez vous avant de continuer</span>

              <div className={style.mobileMenuControl}>
                <Button size="small" link="/sign_in" classe={style.mobileMenuLoginBtn}>CONNEXION</Button>
                <Button size="small" link="/client/sign_up" theme="red" classe={style.mobileMenuLoginBtn}>INSCRIPTION</Button>
              </div>
            </div>
          )
        }
      </div>

      <div className={style.mobildeMenuContent}>
        <div>
          <NavItem text="Accueil" link="/" />
          <NavItem text="Les repetiteurs" link="/search/repeaters" />
          <NavItem text="Deconnexion" onClick={logout} />
        </div>
      </div>
    </article>
  )
}

export default MobileMenu