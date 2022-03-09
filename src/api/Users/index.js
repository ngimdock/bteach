// Users operations
import { db, storage } from '../../firebase'
import {
  onSnapshot,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  collection,
} from 'firebase/firestore'
import { 
  getCollection,
  getCollections
} from '../utils'

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

    return ({
      ...user.data(), 
      id: user.id, 
      password: undefined
    })
  } catch (err) {
    console.error(err)

    return null
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
      id,
      name,
      firstName,
      email,
      password,
      phone,
      date,
      sex,
      town,
      district,
      profilePic,
      notes
    } = data

    // to do

  } catch (err) {
    console.error(err)
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