// Note operations
import { addDoc, onSnapshot, query, where } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { getCollection, getCollections } from '../utils'

/**
 * Get all the notes available
 * @param {String} idService
 */
const firebaseGetNotes = (idService, globalStateAddNotes = (data) => {}) => {
  // Get Note collection reference
  const notesCollectionRef = getCollections("notes")
  const serviceCollectionRef = getCollection(idService, "services")

  const q = query(notesCollectionRef, where("service", "==", serviceCollectionRef))

  onSnapshot(q, (snapshots) => {
    // Empty array for notes
    const notes = []

    // Get data of notes
    snapshots.docs.forEach(doc => {
      notes.push({ ...doc.data(), id: doc.id })
    })

    // Add to the global state
    globalStateAddNotes(notes)

    console.log({notes})
  })
}

/**
 * Create a note (a recommandation)
 * @param {String} idUser 
 * @param {Object} data 
 */
const firebaseCreateNote = async (idUser, idService, data) => {
  // Get collection reference
  const userCollectionRef = getCollection(idUser, "users")
  const notesCollectionRef = getCollections("notes")
  const serviceCollectionRef = getCollection(idService, "services")

  try {
    const {
      message,
      stars
    } = data

    if (message && stars >= 0) {
      await addDoc(notesCollectionRef, {
        message,
        stars,
        isVisible: true,
        author: userCollectionRef,
        service: serviceCollectionRef
      })

      return { data: true }
    } else {
      return { error: "Vos donnees ne sont pas complet" }
    }
  } catch (err) {
    console.log(err)

    return { error: "Un probleme est survenu lors de la creation de la note" }
  }
}

export {
  firebaseGetNotes,
  firebaseCreateNote
}