// Service operations
import { 
  addDoc,
  getDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  updateDoc, 
  where 
} from 'firebase/firestore'
import { firebaseUserGetUser } from '../Users'
import { getCollection, getCollections } from '../utils'

/**
 * Get a service of a specific user
 * @param {String} idUser 
 */
const firebaseServiceGetMyService = async (idUser) => {
  try { 
    // Get reference to a collection
    const servicesCollectionRef = getCollections("services")
    const ownerCollectionRef = getCollection(idUser, "users")

    // Make a query
    const q = query(servicesCollectionRef, where("owner", "==", ownerCollectionRef))

    // Get a service
    const querySnapShot = await getDocs(q)

    
    const doc = querySnapShot.docs[0]

    const service = {...doc.data(), id: doc.id}

    return { data: service }
  } catch (err) {
    console.log(err)

    return { error: "Une erreur est survenu lors de la recuperation du service" }
  }
}

/**
 * Get a single service using its id
 * @param {String} idService 
 */
const firebaseServiceGetService = async (idService) => {
  try {
    // Get reference to a collection
    const serviceCollectionRef = getCollection(idService, "services")

    // Get the service
    const service = await getDoc(serviceCollectionRef)

    if (service) {
      const serviceData = { ...service.data(), id: service.id}

      // Get owner info
      const { data: owner, error } = await firebaseUserGetUser(serviceData.owner.id)

      if (owner) {
        return { data: { ...serviceData, owner } }
      }

      return { error }
    }

    return { error: "Service introuvable" }
  } catch (err) {
    console.log(err)

    return { error: "Une erreur est survenu" }
  }
}

/**
 * Get all the services available
 * @params {() => void} globalStateAddServices
 */
const firebaseServiceGetServices = (globalStateAddServices = (datas) => {}) => {
  try {
    // Get reference to a collection
    const servicesCollectionRef = getCollections("services")

    const q = query(servicesCollectionRef, where("isVisible", "==", true))

    // Get services
    onSnapshot(q, async (snapshot) => {
      const getUser = async (id, serviceData, services) => {
        // Get the user
        const { data: owner } = await firebaseUserGetUser(id)

        // Add the service to the list
        services.push({...serviceData, owner})
      }

      // Initialization of the of the services
      const services = []

      for (let service of snapshot.docs) {
        const serviceData = { ...service.data(), id: service.id }
        const userReference = serviceData.owner

        await getUser(userReference.id, serviceData, services)
      }

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
    // Create a reference
    const serviceCollectionRef = getCollections("services")
    const userCollectionRef = getCollection(idUser, "users")

    // Generate a new Service data
    const serviceData = { 
      coursesLocation: [],
      coursesType: [],
      currentGradeLevel: "",
      description: "",
      isCertified: false,
      isVisible: false,
      levelsUnit: [],
      minPrice: 0,
      teachingUnit: [],
      categories: [],
      degrees: [],
      owner: userCollectionRef
    }

    // Add a new service
    await addDoc(serviceCollectionRef, serviceData)
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
const firebaseServiceUpdateService = async (idService, data) => {
  // Get reference to a service
  const serviceCollectionRef = getCollection(idService, "services")

  try {
    const {
      minPrice,
			currentGradeLevel,
			teachingUnit,
			levelsUnit,
			coursesType,
			coursesLocation,
			description,
      isVisible,
      categories
    } = data

    const credentials = {
      minPrice: minPrice ? minPrice : 0,
			currentGradeLevel: currentGradeLevel ? currentGradeLevel : "",
			teachingUnit: teachingUnit ? teachingUnit : [],
			levelsUnit: levelsUnit ? levelsUnit : [],
			coursesType: coursesType ? coursesType : [],
			coursesLocation: coursesLocation ? coursesLocation : [],
			description: description ? description : "",
      categories: categories ? categories : [],
      isVisible
    }

    await updateDoc(serviceCollectionRef, credentials)

    return { data: true }
  } catch (err) {
    console.log(err)

    return { error: "Une erreur est survenu" }
  }
}

/**
 * Change the visibility of a service
 * @param {String} idService 
 * @param {Boolean} value
 */
const firebaseServiceChangeVisibilityOfService = async (idService, value) => {
  try {
    // Get reference to a collection
    const serviceCollectionRef = getCollection(idService, "services")

    // Change the visibility
    await updateDoc(serviceCollectionRef, { isVisible: value })

    return { data: true }
  } catch (err) {
    console.log(err)

    return { error: "Une erreur est survenu" }
  }
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