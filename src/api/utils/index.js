import { 
  collection, 
  CollectionReference, 
  doc, 
  DocumentData 
} from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "../../firebase"

/**
 * Get a specific collection base on the collection name and the id of the document
 * @param {String} id 
 * @param {String} collectionName 
 * @returns {CollectionReference<DocumentData>}
 */
export const getCollection = (id, collectionName) => {
  return doc(db, collectionName, id)
}

/**
 * Get the whole collection base on the collection name
 * @param {String} collectionName 
 * @returns {CollectionReference<DocumentData>}
 */
export const getCollections = (collectionName) => {
  return collection(db, collectionName)
}

export const uploadImage = (folder, file, getImageURL, getProgress, setUploading) => {
  const filename = `${Date.now()}-${file.name}`
  
  // Preparing image upload
  const storageRef = ref(storage, `images/${folder}/${filename}`)

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      getProgress(progress)
    }, 
    (error) => {
      console.error(error)
      setUploading(false)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        setUploading(false)
        getImageURL(downloadURL) 
      });
    }
  );
}