import React from 'react'
import { BsX } from 'react-icons/bs'
import style from '../../../css/base.module.css'

const MobileMenu = ({ show, onHide }) => {
  return (
    <article className={`${style.mobileMenuContainer} ${!show ? style.mobileMenuTransition : ""}`}>
      <div 
				className={style.navbarIconMenuClose}
				onClick={onHide}	
			>
				<BsX />
			</div>
    </article>
  )
}

export default MobileMenu