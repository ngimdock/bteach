// Note operations
import { db, storage } from '../../firebase'
import { getCollection, getCollections } from "../utils"

import { addDoc } from "firebase/firestore"

/**
 * Get all the notes available
 * @param {String} idService
 */
const firebaseGetNotes = async (idService) => {
  
}

/**
 * Create a note (a recommandation)
 * @param {String} idUser 
 * @param {Object} data 
 */
const firebaseCreateNote = async (idUser, data) => {

  const notesCollectionsRef = getCollections("notes")
  const userRef = getCollection(idUser, "users")

  try{
    const {
      message,
      stars
    } = data

    if(message && stars >= 0){
      const note = {
        message,
        stars,
        isVisible: true,
        author: userRef
      }

      await addDoc(notesCollectionsRef, note)
      return { data: true }
    }else {
      return { error: "Vos donnees ne sont pas complet" }
    }
  }catch (error){
    return { error: error }
  }
}

export {
  firebaseGetNotes,
  firebaseCreateNote
}