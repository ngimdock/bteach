// Users operations
import { auth, db, storage } from '../../firebase'
import {
  onSnapshot,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  collection,
  setDoc,
} from 'firebase/firestore'
import { 
  getCollection,
  getCollections
} from '../utils'
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth'
import { 
  firebaseServiceCreateService, 
  firebaseServiceGetMyService 
} from '../Services'

import { firebaseCreateNote } from "../Notes"

const defaultImageURL = "https://firebasestorage.googleapis.com/v0/b/bteach-server.appspot.com/o/images%2Fprofiles%2Fdefault.png?alt=media&token=be1bf533-7411-4904-b882-facf2cce97a1"

/**
 * Get user
 * @param {String} id 
 */
const firebaseUserGetUser = async (id) => {
  // Get the user collection
  const userCollection = getCollection(id, "users")

  try {
    // Trying getting the document from firestore
    const user = await getDoc(userCollection)

    return { data: {...user.data(), id} }
  } catch (err) {
    console.error(err)

    return { error: "Erreur lors de la recuperation des donnees du serveur" }
  }
}

/**
 * Get the current user
 * @param {() => void} globalStateLogin 
 */
const firebaseUserGetCurrentUser = (globalStateLogin = (data) => {}) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid

      try {
        const getUserData = async () => {
          // Get info of the current user basing on his user id
          const { data } = await firebaseUserGetUser(uid)


          const note = await firebaseCreateNote(uid, { message: "Message de note", stars: 3 })

  
          if (data) {
            let user = null
            // await firebaseServiceCreateService(uid)

            // Get service if the user is a repeater
            if (data.role === 1) {
              const { data: service } = await firebaseServiceGetMyService(uid)
  
              if (service) {
                user = { ...data, name: data.lastName, lastName: undefined, service }
                console.log({ user })
              }
            }

            user = {...data, name: data.lastName, lastName: undefined}

            // Store the data of the currentuse inside the global state
            globalStateLogin(user)
  
            return
          }
  
          console.log({ error: "User introuvable" })
  
          return
        }

        getUserData()
      } catch (err) {
        console.log(err)

        console.log({ error: "Un probleme est survenu" })
      }
    } else {
      console.log({ error: "Aucun user n'est connecte" })
    }
  })
}

/**
 * Create a user
 * @param {Object} data 
 */
const firebaseUserCreateUser = async (datas) => {
  try {
    // destructuration of data
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      date,
      sex,
      town,
      district,
      role
    } = datas

    // Create an instance of a User in firebase
    const credentials = await createUserWithEmailAndPassword(auth, email, password)

    // creation date declaration
    const creation_user_date = Date.now()

    // Get the new user id
    const uid = credentials.user.auth.currentUser.uid


    // Get a user collection reference
    const userCollection = getCollection(uid, "users")

    // Insertion of the user in firestore
    await setDoc(userCollection, {
      firstName,
      lastName,
      email,
      phone,
      date,
      creation_date: creation_user_date,
      sex,
      town,
      district,
      profilePic: defaultImageURL,
      role
    })

    return { data: true }
  } catch (err) {
    console.error(err)

    return { error: "Un probleme est survenu durant le processus de creation de votre compte" }
  }
}

/**
 * Login a user
 * @param {String} email 
 * @param {String} password 
 */
const firebaseUserLogin = async (email, password) => {
  if (email && password) {
    try {
      // Login the user
      const credentials = await signInWithEmailAndPassword(auth, email, password)

      if (credentials) {
        return { data: true }
      } 

      return { error: "Une erreur est survenu lors de la connection" }
    } catch (err) {
      console.log(err)
    }
  } else {
    return { error: "Fournissez un email et un password non vide" }
  }
}

/**
 * Signout a user
 * @returns {Object}
 */
const firebaseUserLogout = async () => {
  try {
    // SignOut a user
    await signOut(auth)

    return { data: true }
  } catch (err) {
    console.log(err)

    return { error: err }
  }
}

/**
 * Update a user
 * @param {String} id 
 * @param {Object} data 
 */
const firebaseUserUpdateUser = async (id, data) => {
  // To do
}

/**
 * Delete a user
 * @param {String} id 
 */
const firebaseUserDeleteUser = async (id) => {
  // To do
}

/**
 * Change the profile photo of the given user
 * @param {String} id 
 * @param {String} photoURL 
 */
const firebaseUserChangeProfilePic = async (id, photoURL) => {
  // To do
}

export {
  firebaseUserGetUser,
  firebaseUserGetCurrentUser,
  firebaseUserCreateUser,
  firebaseUserLogout,
  firebaseUserLogin,
  firebaseUserUpdateUser,
  firebaseUserChangeProfilePic,
  firebaseUserDeleteUser
}