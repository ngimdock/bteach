import React from 'react'
import { BsX } from 'react-icons/bs'
import style from '../../../css/base.module.css'
import ImgCircle from '../../elements/imgCircle/ImgCircle'
import Button from '../../elements/buttons/Button'
import ALink from '../../elements/a/ALink'

const profileImage = require("../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg")

const NavItem = ({ text, link }) => {
  const defaultLink = link ? link : "#"

  return (
    <ALink classe={style.mobileMenuNavItem} link={defaultLink}>
      <span className={style.mobileMenuNavItemText}>{ text }</span>
    </ALink>
  )
}

const MobileMenu = ({ show, onHide }) => {
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
          !false ? (
            <>
              <ImgCircle classe={style.mobileMenuHeaderImage} src={profileImage} />

              <div className={style.mobileMenuHeaderInfo}>
                <span className={style.mobileMenuHeaderName}>Dilane Kombou</span>

                <Button link="/repeater/profile/d" classe={style.mobileMenuHeaderInfoBtn}>Editer le profil</Button>
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
          <NavItem text="Deconnexion" />
        </div>
      </div>
    </article>
  )
}

export default MobileMenu