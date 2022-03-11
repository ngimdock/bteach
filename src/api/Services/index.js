// Service operations
import { db, storage } from '../../firebase'

/**
 * Get a service of a specific user
 * @param {String} idUser 
 */
const getMyService = async (idUser) => {
  // To do
}

/**
 * Get a single service using its id
 * @param {String} idService 
 */
const getService = async (idService) => {
  // To do
}

/**
 * Get all the services available
 */
const getServices = async () => {
  // To do
}

/**
 * Get filtered services based on some parameters
 * @param {Object} filters 
 */
const getFilteredServices = async (filters) => {
  // To do
}

/**
 * Create a new service
 * @param {String} idUser 
 * @param {Object} data 
 */
const createService = async (idUser, data = null) => {
  // To do
}

/**
 * Update a service
 * @param {String} idUser 
 * @param {String} idService 
 * @param {Object} data 
 */
const updateService = async (idUser, idService, data) => {
  // To do
}

/**
 * Change the visibility of a service
 * @param {String} idUser
 * @param {String} idService 
 */
const changeVisibility = async (idUser, idService) => {
  // To do
}

export {
  getMyService,
  getService,
  getFilteredServices,
  getServices,
  createService,
  updateService,
  changeVisibility
}