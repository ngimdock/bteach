// Service operations
import { addDoc, doc, getDocs, onSnapshot } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { firebaseUserGetUser } from '../Users'
import { getCollections } from '../utils'

/**
 * Get a service of a specific user
 * @param {String} idUser 
 */
const firebaseServiceGetMyService = async (idUser) => {
  // To do
}

/**
 * Get a single service using its id
 * @param {String} idService 
 */
const firebaseServiceGetService = async (idService) => {
  // To do
}

/**
 * Get all the services available
 * @params {() => void} globalStateAddServices
 */
const firebaseServiceGetServices = (globalStateAddServices = (datas) => {}) => {
  try {
    // Get reference to a collection
    const servicesCollectionRef = getCollections("services")

    // Get services
    onSnapshot(servicesCollectionRef, async (snapshot) => {
      const getUser = async (id, servicesData, services) => {
        // Get the user
        const { data } = await firebaseUserGetUser(id)

        // Change the owner property
        servicesData.owner = data

        // Add the service to the list
        services.push(servicesData)
      }

      // Initialization of the of the services
      const services = []

      for (let service of snapshot.docs) {
        const servicesData = { ...service.data(), id: service.id }
        const userReference = servicesData.owner

        await getUser(userReference.id, servicesData, services)
      }

      console.log(services)

      globalStateAddServices(services)
    })
  } catch (err) {
    console.log(err)
  }
}

/**
 * Get filtered services based on some parameters
 * @param {Object} filters 
 */
const firebaseServiceGetFilteredServices = async (filters) => {
  // To do
}

/**
 * Create a new service
 * @param {String} idUser 
 * @param {Object} data 
 */
const firebaseServiceCreateService = async (idUser) => {
  try {
    // Get user basing on the idUser
    const user = await firebaseUserGetUser(idUser)

    // Create a reference
    const serviceCollectionRef = getCollections("services")

    // Add a new service
    await addDoc(serviceCollectionRef, { owner: doc(db, `users/${idUser}`) })
  } catch (err) {
    console.log(err)
  }
}

/**
 * Update a service
 * @param {String} idUser 
 * @param {String} idService 
 * @param {Object} data 
 */
const firebaseServiceUpdateService = async (idUser, idService, data) => {
  // To do
}

/**
 * Change the visibility of a service
 * @param {String} idUser
 * @param {String} idService 
 */
const firebaseServiceChangeVisibilityOfService = async (idUser, idService) => {
  // To do
}

export {
  firebaseServiceGetMyService,
  firebaseServiceGetService,
  firebaseServiceGetFilteredServices,
  firebaseServiceGetServices,
  firebaseServiceCreateService,
  firebaseServiceUpdateService,
  firebaseServiceChangeVisibilityOfService
}