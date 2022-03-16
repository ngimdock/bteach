import React, { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BsPerson, BsBoxArrowRight } from "react-icons/bs"
import { firebaseUserLogout } from '../../../api/Users'
import currentUserContext from '../../../dataManager/context/currentUserContext'
import { Link } from 'react-router-dom'


const NavbarProfilDropdown = ({ dropElt }) => {
  // Get data from global state
  const { currentUser, logout: userLogout } = useContext(currentUserContext)

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

  const getUserType = () => {
    console.log(currentUser)
    if (currentUser.getRole === 1) {
      return "repeater"
    } else if (currentUser.getRole === 0) {
      return "client"
    }

    return "admin"
  }

	return(
		<Menu as="div" className="relative inline-block text-left font-primary">
      <div>
        <Menu.Button>
          { dropElt }
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link to={`/${getUserType()}/profile/dilane`}>
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-primary' : 'text-gray-900'
                    } group flex items-center space-x-2 w-full px-2 py-2 text-sm`}
                  >
                    <BsPerson size="25" className="icon" />
                      
                    <span>Profil</span>
                  </button>
                </Link>
              )}
            </Menu.Item>
          </div>
          <hr style={{width: "80%", margin: "0 auto"}} />
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 text-primary' : 'text-gray-900'
                  } group flex items-center space-x-2 w-full px-2 py-2 text-sm`}
                  onClick={logout}
                >
                  <BsBoxArrowRight size="25" className="icon" />
                  <span>
                    Deconnexion
                  </span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
	)
}

export default NavbarProfilDropdown