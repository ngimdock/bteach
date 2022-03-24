import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiAlertFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { BsCameraFill, BsEyeSlash } from "react-icons/bs";
import H3 from "../../../components/elements/titles/H3";
import Button from "../../../components/elements/buttons/Button";
import Paragraphe from "../../../components/elements/p/Paragraphe";
import image from "../../../medias/photos/pexels-rfstudio-3061415 (1).jpg";
import styles from '../../../css/clientProfile.module.css'
import repeaterProfileStyle from '../../../css/personalInfoRepeater.module.css'
import currentUserContext from '../../../dataManager/context/currentUserContext'
import { firebaseUserChangeProfilePic } from "../../../api/Users";
import { uploadImage } from "../../../api/utils";
import LoaderCircle from "../../../components/utils/loaders/LoaderCircle";
import AddProfilPhotoModal from "../../../components/utils/modals/addPhotoModal";

const text =
  "Je suis gaelle kengne, éleve de premiere C en physique je cherche un repetiteur en physique pour mieux comprendre les notions enseignes en cours afin de passer mon probatoire avec une bonne mention.";
const text1 =
  "Je suis tres travailleuse et je progresse rapidement, vous pouvez contez sur moi pour respecter votre professionalisme et effectuer les exercices que vous allez me donner.";
const text2 = "N'hesitez pas à me contacter pour plus de detail...";

const BodyClientProfile = () => {
  // Get global state
  const { currentUser, updateProfilePic } = useContext(currentUserContext)

  // Set local state
  const [isHover, setIsHover] = useState(false)
  const [image, setImage] = useState(null)
	const [imagePreview, setImagePreview] = useState("")
	const [imageURL, setImageURL] = useState("")
	const [uploading, setUploading] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const [progress, setProgress] = useState(0)
	const [loadingSaveImg, setLoadingSaveImg] = useState(false)

  // Use ref section
	const inputRef = useRef()

	const updateProfilePicCb = useCallback(() => updateProfilePic, [updateProfilePic])
	const updateProfilePicRef = useRef(updateProfilePicCb)

	const changeProfilePhotoCb = useCallback(() => async (removeImageUrl) => {
		setLoadingSaveImg(true)
		try {
			const { data } = await firebaseUserChangeProfilePic(currentUser.getId, imageURL)

			if (data) {
				updateProfilePicRef.current()(imageURL)
				removeImageUrl("")
			}
		} catch (err) {
			console.log(err)
		} finally {
			setLoadingSaveImg(false)
		}
	}, [currentUser.getId, imageURL])

	const changeProfilePhotoRef = useRef(changeProfilePhotoCb)

	useEffect(() => {
		changeProfilePhotoRef.current = changeProfilePhotoCb
	}, [changeProfilePhotoCb])

	useEffect(() => {
		updateProfilePicRef.current = updateProfilePicCb
	}, [updateProfilePicCb])

	// Use effect section
	useEffect(() => {
		if (imageURL) {
			changeProfilePhotoRef.current()(setImageURL)
		}
	}, [imageURL])

	// Some handlers
	const handleOpenFileSystem = () => {
		inputRef.current.click()
	}

	const handleSelectImage = (e) => {
		e.preventDefault()

		const file = e.target.files[0]
		const preview = URL.createObjectURL(file)

		setImage(file)
		setImagePreview(preview)

		setModalOpen(true)
	}

	const handleProgressUpload = (progress) => {
		console.log(progress)
		setProgress(progress)
	}

	const handleGetImageUrl = (image) => {
		setImageURL(image)
	}

	const handleUploadImage = () => {
		setUploading(true)

		uploadImage("profiles", image, handleGetImageUrl, handleProgressUpload, setUploading)
	}

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {
				modalOpen && <AddProfilPhotoModal 
					image={imagePreview}
					onHide={() => setModalOpen(false)}
					onChangeProfil={handleOpenFileSystem}
					onUploadProfil={handleUploadImage}
					onCloseProgress={() =>setProgress(0)}
					percentage={progress}
					uploading={uploading}
				/>
			}

      <div className="w-full flex flex-col items-center justify-center">
        <div className="rounded-md bg-white grid grid-cols-1 grid-flow-row gap-4 w-full">
          {/* <div className="text-secondary flex items-center">
            <RiAlertFill />
            <span className="ml-2 items-center text-xs md:text-base">
              Pour voir les contacts de Gaelle vous devez{" "}
              <Link to="/sign_in" className="underline decoration-secondary">
                vous connecter
              </Link>{" "}
              ou{" "}
              <Link
                to="/repeater/sign_up"
                className="underline decoration-secondary"
              >
                créer un compte
              </Link>
            </span>
          </div> */}
          <div className={styles.profileContainer}>
            <span className={styles.profileCover} />
            <div 
              className={styles.profileImageContainer}
              style={{
                position: "relative",
                widht: "auto",
                height: "auto",
                opacity: loadingSaveImg ? .4:1
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {
                loadingSaveImg && (
                  <LoaderCircle size="normal" color="#3e4bff" />
                )
              }

              <img
                className="rounded-md object-cover object-center"
                src={currentUser.getProfilePic}
                alt="client thumbnail"
              />

              <input 
                ref={inputRef} 
                hidden 
                type="file" 
                accept='image/*' 
                onChange={handleSelectImage}
              />

              <span 
                className={`${repeaterProfileStyle.profileImageIcon} ${isHover && repeaterProfileStyle.profileImageIconAnimation}`}
                onClick={handleOpenFileSystem}
              >
                <BsCameraFill size={20} color="#fff" />
              </span>
            </div>
            <div className={styles.profileInfo}>
              <div>
                <H3 classe={`mt-1 mb-4 ${styles.profileName}`}>{ currentUser.getFullName }</H3>
                {/* <Paragraphe 
                  children="Filieres: Svt, Physique, Chimie" 
                  classe="my-1"
                /> */}
                {/* <Paragraphe 
                  children="Classe: Premiere D" 
                  classe="my-1"
                /> */}
                <Paragraphe
                  classe="text-white flex items-center"
                  children={
                    <>
                      <GrMapLocation className="text-gray-600" />
                      <span className="ml-1">{ currentUser.getTown } ({ currentUser.getDistrict })</span>
                    </>
                  }
                />
              </div>
              <div className="flex gap-1 mt-6">
                <Button
                  classe="font-bold normal-case"
                  size="small"
                  rounded="rounded"
                  theme="dark"
                  children="Envoyer un mail"
                />
                <Button
                  size="small"
                  theme="dark"
                  rounded="rounded"
                  children={
                    <>
                      <span className="uppercase">Tel: </span>
                      <span className="font-bold">{ currentUser.getPhone }</span>
                    </>
                  }
                />
              </div>
            </div>
          </div>

          <div className={styles.profileBottom}>
            {/* <Paragraphe classe={`px-4 text-gray-800 opacity-60 text-xs md:text-sm ${styles.profileDescription}`}>
              { text }
            </Paragraphe> */}
            <div
              className={`flex px-4 flex-wrap gap-2 md:gap-6 mt-6 ${styles.profileBottomButton}`}>
              <Button
                size="small"
                theme="dark"
                classe="bg-gray-900 text-white normal-case"
                children="Modifier vos informations personnelles"
              />
              {/* <Button
                size="small"
                theme="dark"
                classe="bg-gray-900 text-white normal-case"
                children="Modifier votre offre de repétition"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyClientProfile;
