// Note operations
import { addDoc, onSnapshot, query, where } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { firebaseUserGetUser } from '../Users'
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

  
  onSnapshot(q, async (snapshots) => {
    const getUserData = async (uid) => {
      try {
        const { data } = await firebaseUserGetUser(uid)
  
        return { data }
      } catch (err) {
        return { error: "Une est survenu" }
      }
    }

    // Empty array for notes
    const notes = []

    // Get data of notes
    for (let doc of snapshots.docs) {
      const { data } = await getUserData(doc.data().author.id)

      notes.push({ ...doc.data(), id: doc.id, author: data })
    }

    // Add to the global state
    globalStateAddNotes(idService, notes)

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