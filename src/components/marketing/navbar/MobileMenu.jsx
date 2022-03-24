import React, { useContext, useState } from 'react'
import { BsX } from 'react-icons/bs'
import style from '../../../css/base.module.css'
import ImgCircle from '../../elements/imgCircle/ImgCircle'
import Button from '../../elements/buttons/Button'
import ALink from '../../elements/a/ALink'
import currentUserContext from '../../../dataManager/context/currentUserContext'
import { firebaseUserLogout } from '../../../api/Users'

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
  // Get data from the global state
  const { currentUser, logout: userLogout } = useContext(currentUserContext)

  // Logout function
  const logout = async () => {
    try {
      // Try to log out the current user
      const { data } = await firebaseUserLogout()

      if (data) {
        // Delete the currentuse from the global state
        userLogout()
      } else {
        console.log("error while logout")
      }
    } catch(err) {
      console.log(err)
    }
  }

  const getUserType = () => {
    if (currentUser.getRole === 1) {
      return "repeater"
    } else if (currentUser.getRole === 0) {
      return "client"
    }

    return "admin"
  }

  return (
    <article className={`${style.mobileMenuContainer} ${!show ? style.mobileMenuTransition : ""}`}>
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
              <ImgCircle classe={style.mobileMenuHeaderImage} src={currentUser.getProfilePic} />

              <div className={style.mobileMenuHeaderInfo}>
                <span className={style.mobileMenuHeaderName}>{ `${currentUser.getFullName}` }</span>

                <Button 
                  link={`/${getUserType()}/profile/${getUserType() === "repeater" ? currentUser.getService.getId:currentUser.getName}`}
                  classe={style.mobileMenuHeaderInfoBtn}
                >Editer le profil</Button>
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