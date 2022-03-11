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
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

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
 * @param {String} accessToken 
 */
const firebaseUserGetCurrentUser = async (accessToken) => {
  // To do
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


    // Get the whole user collection
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

    // Get user basing on his uid
    const { data, error } = await firebaseUserGetUser(uid)

    if (data) {
      return { data: { ...data, accessToken: credentials.user?.accessToken } }
    } 

    return error
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

      // Get the new user id
      const uid = credentials.user.auth.currentUser.uid

      // Get user basing on his uid
      const { data, error } = await firebaseUserGetUser(uid)

      if (data) {
        return { data: { ...data, accessToken: credentials.user?.accessToken } }
      } 

      return error
    } catch (err) {
      console.log(err)
    }
  } else {
    return { error: "Fournissez un email et un password non vide" }
  }
}

const firebaseUserLogout = async () => {
  try {
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

export {
  firebaseUserGetUser,
  firebaseUserGetCurrentUser,
  firebaseUserCreateUser,
  firebaseUserLogout,
  firebaseUserLogin,
  firebaseUserUpdateUser,
  firebaseUserDeleteUser
}