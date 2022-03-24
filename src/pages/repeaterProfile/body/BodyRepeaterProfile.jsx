import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import ImgCircle from '../../../components/elements/imgCircle/ImgCircle'
import style from '../../../css/personalInfoRepeater.module.css'
import Button from '../../../components/elements/buttons/Button'
import H3 from '../../../components/elements/titles/H3'
import RecommandationCarousel from '../../../components/utils/carousels/RecommandationCarousel'
import currentUserContext from '../../../dataManager/context/currentUserContext'
import { BsCameraFill } from 'react-icons/bs'
import AddProfilPhotoModal from '../../../components/utils/modals/addPhotoModal'
import { firebaseUserChangeProfilePic } from '../../../api/Users'
import { uploadImage } from '../../../api/utils'
import LoaderCircle from '../../../components/utils/loaders/LoaderCircle'
import { useLocation } from 'react-router-dom'
import serviceContext from '../../../dataManager/context/servicesContext'

const imageIllustration = require("../../../medias/illustrations/process1.png")

const ProfileItem = ({ text, color }) => {
	const defaultColor = color ? color : "#00a8e8"

	return (
		<span 
			className={style.profileItem}
			style={{ 
				color: defaultColor, 
				borderWidth: 2, 
				borderColor: defaultColor 
			}}
		>
			{ text }
		</span>
	)
}

/**
 * Check if the user is the current user
 * @param {User} user 
 * @param {String} serviceId 
 * @returns 
 */
const isCurrentUser = (user, serviceId) => {
	if (user) {
		if (user.getService.getId === serviceId) {
			return true
		}
	}

	return false
}

const getService = (services, serviceId) => services.find(service => service.getId === serviceId)

const BodyRepeaterProfile = () => {
	// Get data from URL
	const location = useLocation()
	const locationSplit = location.pathname.split("/")
	const serviceId = locationSplit[locationSplit.length - 1]

	// Get global state
	const { currentUser, updateProfilePic } = useContext(currentUserContext)
	const { services } = useContext(serviceContext)

	// Set locale state
	const [service, setService] = useState(
		isCurrentUser(currentUser, serviceId) ? (
			currentUser.getService 
		) : (getService(services, serviceId))
	)
	const [owner, setOwner] = useState(
		isCurrentUser(currentUser, serviceId) ? (
			currentUser
		) : (getService(services, serviceId).getOwner)
	)

	console.log({ service, owner })

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

	// Handler users
	

	return(
		<section className={style.profileContainer}>
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
			

			<header className={style.profileHeader}>
				<div 
					className={style.profileImageContainer}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					style={{ opacity: loadingSaveImg ? .4:1 }}
				>
					{
						loadingSaveImg && (
							<LoaderCircle size="normal" color="#3e4bff" />
						)
					}
					<ImgCircle src={owner.getProfilePic} alt="profile" classe={style.profileImage} />

					<span 
						className={`${style.profileImageIcon} ${isHover && style.profileImageIconAnimation}`}
						onClick={handleOpenFileSystem}
					>
						<BsCameraFill size={20} color="#fff" />
					</span>

					<input 
						ref={inputRef} 
						hidden 
						type="file" 
						accept='image/*' 
						onChange={handleSelectImage}
					/>
				</div>

				<div className={style.profileInfoSection}>
					<div className={style.profilePersonal}>
						<div className={style.profilePersonalInfo}>
							<span className={style.profileName}>{ owner.getFullName}</span>
							<span>
								<span className={style.profileLocation}>{ `${owner.getTown} ( ${owner.getDistrict} )` }</span>
							</span>
							<span className={style.profileSubject}>Filiere: Physique, Chimie</span>
						</div>

						<div className={style.profileControl}>
							<Button size="medium" classe={`${style.profileBtn} ${style.profileBtnFirst}`}>RECOMMANDER</Button>
							<Button size="medium" classe={style.profileBtn}>CONTACTER</Button>
						</div>
					</div>

					<div className={style.profileGeneralInfo}>
						<article className={style.generalInfoItem}>
							<span>Salaire Approximatif</span>
							<span>15 000fcfa/mois</span>
						</article>

						<article className={style.generalInfoItem}>
							<span>Age</span>
							<span>20 ans</span>
						</article>

						<article className={style.generalInfoItem}>
							<span>Niveau Academique</span>
							<span>Bac + 4 Physique</span>
						</article>
					</div>
				</div>
			</header>

			<section className={style.profileContent}>
				
				<H3>Detail de l'offre de repetition</H3>

				<div className={style.profileContentItems}>
					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Matieres
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Physique" />
							<ProfileItem text="Mathematique" />
							<ProfileItem text="Chimie" />
							<ProfileItem text="Anglais" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Niveau Scolaire
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Primaire" color="#e00045" />
							<ProfileItem text="Secondaire" color="#e00045" />
							<ProfileItem text="Universite" color="#e00045" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Type de cours
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Cours individuelle" color="#04e762" />
							<ProfileItem text="Cours en groupe" color="#04e762" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Lieu du cours
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Chez eleve" color="#f77f00" />
							<ProfileItem text="Chez enseignant" color="#f77f00" />
							<ProfileItem text="En ligne" color="#f77f00" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Profession actuelle
						</span>

						<div className={style.profileContentItemBody}>
							<ProfileItem text="Etudiant en Physique" />
						</div>
					</article>

					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Description
						</span>

						<div className={style.profileContentItemBody}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et libero esse earum 
							autem? Aperiam, id repellendus sed ad recusandae ab obcaecati. Eligendi, sequi? Commodi voluptatum
							ut ea vero nesciunt?
						</div>
					</article>

					<H3 classe="mt-20">Les recommandations du repetiteur (4)</H3>

					<RecommandationCarousel />
				</div>

				<ImgCircle 
					classe={style.profileContentIllustration} 
					src={imageIllustration} 
					alt="illustration"
				/>

			</section>
		</section>
	)
}

export default BodyRepeaterProfile