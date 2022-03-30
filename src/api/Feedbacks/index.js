// Feedback operations
import { addDoc, getDoc, onSnapshot } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { firebaseUserGetUser } from '../Users'
import { getCollection, getCollections } from '../utils'

/**
 * @returns a list of feedbacks to the administrator
 */
const firebaseGetFeebacks = () => {

  console.log("hello")
  try {
    // Get the reference to the collection of feedbacks
    const feedbacksCollectionRef = getCollections("feedbacks")

    // Get feedback
    onSnapshot(feedbacksCollectionRef, async (snapshot) => {
      // Feedbacks array
      const feedbacks = []

      for (let feedback of snapshot.docs) {
        // Get feedback data
        let feedbackData = { ...feedback.data(), id: feedback.id }

        // Get author id
        const authorId = feedbackData.author.id

        // Get author data
        const { data } = await firebaseUserGetUser(authorId)

        if (data) {
          feedbacks.push({...feedbackData, author: data })
        }
      }

      return { data: feedbacks }
    })
  } catch (err) {
    console.log(err)

    return { error: "Une erreur est survenu" }
  }
}

/**
 * 
 * @param {String} idUser 
 * @param {Object} data 
 */
const firebaseCreateFeebacks = async (idUser, data) => {
  if (data) {
    try {
      // Get collection reference of user and feedbacks
      const feedbacksCollectionRef = getCollections("feedbacks")
      let userCollectionRef
      let user

      if (idUser) {
        userCollectionRef = getCollection(idUser, "users")
        user = await getDoc(userCollectionRef)
      }


      // Generate the feedbackData
      const feedbackData = { 
        message: data.message, 
        date: Date.now(), 
        author: user?.data() ? userCollectionRef : null,
        email: data.email
      }
  
      // Create a new feedback
      await addDoc(feedbacksCollectionRef, feedbackData)
  
      return { data: true }
    } catch (err) {
      console.log(err)

      return { error: "Un probleme est survenu" }
    }
  } else {
    return { error: "Fournir une message dans votre feedback" }
  }
}

export {
  firebaseGetFeebacks,
  firebaseCreateFeebacks
}