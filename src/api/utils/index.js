import { 
  collection, 
  CollectionReference, 
  DocumentData 
} from "firebase/firestore"
import { db } from "../../firebase"

/**
 * Get a specific collection base on the collection name and the id of the document
 * @param {String} id 
 * @param {String} collectionName 
 * @returns {CollectionReference<DocumentData>}
 */
export const getCollection = (id, collectionName) => {
  return collection(db, collectionName, id)
}

/**
 * Get the whole collection base on the collection name
 * @param {String} collectionName 
 * @returns {CollectionReference<DocumentData>}
 */
export const getCollections = (collectionName) => {
  return collection(db, collectionName)
}