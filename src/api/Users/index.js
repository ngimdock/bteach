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
} from 'firebase/firestore'
import { 
  getCollection,
  getCollections
} from '../utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const defaultImageURL = "https://firebasestorage.googleapis.com/v0/b/bteach-server.appspot.com/o/images%2Fprofiles%2Fdefault.png?alt=media&token=be1bf533-7411-4904-b882-facf2cce97a1"

/**
 * Get user
 * @param {String} id 
 */
const getUser = async (id) => {
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
 * Create a user
 * @param {Object} data 
 */
const createUser = async (data) => {
  // Get the whole user collection
  const usersCollection = getCollections("users")

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
    } = data

    // Create an instance of a User in firebase
    const credentials = await createUserWithEmailAndPassword(auth, email, password)

    // creation date declaration
    const creation_user_date = Date.now()

    const newUser = await addDoc(usersCollection, {
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

    // Get the new user id
    const uid = newUser.id

    // Get user basing on his uid
    const { data, error } = await getUser(uid)

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
 * Update a user
 * @param {String} id 
 * @param {Object} data 
 */
const updateUser = async (id, data) => {
  // To do
}

/**
 * Delete a user
 * @param {String} id 
 */
const deleteUser = async (id) => {
  // To do
}

export {
  getUser,
  createUser,
  updateUser,
  deleteUser
}