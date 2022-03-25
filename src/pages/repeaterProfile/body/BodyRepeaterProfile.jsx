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
import CreateNoteModal from "../../../components/utils/modals/CreateNoteModal"
import ContactRepeaterModal from "../../../components/utils/modals/ContactRepeaterModal"
import LoadingPage from '../../../components/marketing/navbar/LoadingPage'
import AskToSigninModal from '../../../components/utils/modals/AskToSigninModal'

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
	if (user && user.getRole === 1) {
		if (user.getService.getId === serviceId) {
			return true
		}
	}

	return false
}

const getService = (services, serviceId, setServiceExist = (val) => {}) => {
	const service = services.find(serv => {
		return serv.getId === serviceId
	})

	if (service) {
		setServiceExist(true)
	}

	return service
}

const getAge = (date) => {
	const birthDay = Number(date)
	const currentDate = Date.now()
	const diffDate = Math.floor((currentDate - birthDay)/1000)

	return Math.floor(diffDate / 31536000)
}

const BodyRepeaterProfile = () => {
	// Get data from URL
	const location = useLocation()
	const locationSplit = location.pathname.split("/")
	const serviceId = locationSplit[locationSplit.length - 1]

	// Get global state
	const { currentUser, updateProfilePic } = useContext(currentUserContext)
	const { services } = useContext(serviceContext)


	// Set locale state
	const [service, setService] = useState(null)
	const [owner, setOwner] = useState(null)
	const [serviceExist, setServiceExist] = useState(false)

	// Set local state
	const [isHover, setIsHover] = useState(false)
	const [image, setImage] = useState(null)
	const [imagePreview, setImagePreview] = useState("")
	const [imageURL, setImageURL] = useState("")
	const [uploading, setUploading] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const [progress, setProgress] = useState(0)
	const [loadingSaveImg, setLoadingSaveImg] = useState(false)
	const [isModalAnnonceOpen, setIsModalAnnonceOpen] = useState(false)
	const [isModalContactRepeaterOpen, setIsModalContactRepeaterOpen] = useState(false)
	const [isModalAskToSigninOpen, setIsModalAskToSigninOpen] = useState(false)

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
	}, [currentUser, imageURL])

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

	// useEffect(() => {
	// 	if (currentUser.getRole === 1){
	// 		console.log("repeater")
	// 		const {

	// 		} = currentUser.getService
	// 	}
	// }, []);

	useEffect(() => {
		const serviceTmp = getService(services, serviceId)

		// Update service and owner when the current user change
		const service = isCurrentUser(currentUser, serviceId) ? (
			currentUser.getService 
		) : (serviceTmp)

		console.log({ serviceTmp })

		const owner = isCurrentUser(currentUser, serviceId) ? (
			currentUser
		) : (serviceTmp && serviceTmp.getOwner)

		if (service && owner) {
			setService(service)
	
			setOwner(owner)

			setServiceExist(true)
		}
	}, [serviceId, services, currentUser])

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
		setProgress(progress)
	}

	const handleGetImageUrl = (image) => {
		setImageURL(image)
	}

	const handleUploadImage = () => {
		setUploading(true)

		uploadImage("profiles", image, handleGetImageUrl, handleProgressUpload, setUploading)
	}

	const handleOpenModal = (modalType) => {
		if (currentUser) {
			if (modalType === "recommandation") {
				setIsModalAnnonceOpen(true)
			} else if (modalType === "contact") {
				setIsModalContactRepeaterOpen(true)
			}
		} else {
			setIsModalAskToSigninOpen(true)
		}
	}

	const formatUnits = (unitToFormated) => {
		return unitToFormated.join(", ")
	}

	return(
		<>
			{
				serviceExist ? (

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
										<p className={style.profileSubject}>
											Filières : {" "}
											{
												service.getTeachingUnit.length ? (
															<span>
																{ formatUnits(service.getTeachingUnit) }
															</span>
												) : (
													<span className='text-white text-xs italic'>Non renseigné</span>
												)
											}
										</p>
									</div>

									<div className={style.profileControl}>
										{
											isCurrentUser(currentUser, serviceId) ? (
												<Button 
													style={{ marginTop: 20 }}
													size="medium"
													>
														Editer votre profil
												</Button>
											):(
												<>
													<Button 
														size="medium" 
														classe={`${style.profileBtn} 
														${style.profileBtnFirst}`}
														action={() => handleOpenModal("recommandation") }
														>
															RECOMMANDER
													</Button>
													<Button 
														size="medium" 
														classe={style.profileBtn}
														action={() => handleOpenModal("contact")}
														>
														CONTACTER
													</Button>
												</>
											)
										}
									</div>
								</div>

								<div className={style.profileGeneralInfo}>
									<article className={style.generalInfoItem}>
										<span>Salaire Approximatif</span>
										{
											service.getMinPrice ? <span>{service.getMinPrice} fcfa/mois</span> : <p className='text-gray-500 text-xs font-primary italic'>Non renseigné</p>
										}
										
									</article>

									<article className={style.generalInfoItem}>
										<span>Age</span>
										{
											owner.getDate ? <span>{getAge(owner.getDate)} ans</span> : <p className='text-gray-500 text-xs font-primary italic'>Non renseigné</p>
										}
									</article>

									<article className={style.generalInfoItem}>
										<span>Niveau Académique</span>
										{
											service.getCurrentGradeLevel ? <span>{service.getCurrentGradeLevel}</span> : <p className='text-gray-500 text-xs font-primary italic'>Non renseigné</p>
										}
									</article>
								</div>
							</div>
						</header>

						<section className={style.profileContent}>
							
							<H3>Détail de l'offre de répétition</H3>

							<div className={style.profileContentItems}>
							
								<ArticleBlock
									title="Matières"
									listElements={service.getTeachingUnit}
								/>

								<ArticleBlock
									title="Niveau Scolaire Enseignés"
									listElements={service.getLevelsUnit}
									color="#e00045"
								/>

								<ArticleBlock
									title="Type de cours"
									listElements={service.getCoursesType}
									color="#04e762"
								/>
								
								<ArticleBlock
									title="Lieu du cours"
									listElements={service.getCoursesLocation}
									color="#f77f00"
								/>
								<article className={style.profileContentItem}>
									<span className={style.profileContentItemTitle}>
										Description
									</span>

									<div className={style.profileContentItemBody}>
										{ service.getDescription ? 
											service.getDescription : (
												<span className="text-gray-500 text-xs font-primary italic">
													Cette partie du service n'est pas remplit
												</span>
											) 
										}
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
						<CreateNoteModal
							isOpen={isModalAnnonceOpen}
							closeModal={() => setIsModalAnnonceOpen(false)}
						/>
						<ContactRepeaterModal
							data={owner}
							isOpen={isModalContactRepeaterOpen}
							closeModal={() => setIsModalContactRepeaterOpen(false)}
						/>
						<AskToSigninModal
							isOpen={isModalAskToSigninOpen}
							closeModal={() => setIsModalAskToSigninOpen(false)}
						/>
					</section>
				):( <LoadingPage loading={serviceExist} /> )
			}
		</>
	)
}

function ArticleBlock({ title, listElements, color  }) {

	const result = listElements.length ? (
		<div className={style.profileContentItemBody}>
			{ listElements.map((eltText, index) => <ProfileItem text={eltText} color={color} key={index} />) }
		</div>
	) : (
		<span className="text-gray-500 text-xs font-primary italic">
			Cette partie du service n'est pas remplit
		</span>
	)

	
	return ( 
		<article className={style.profileContentItem}>
			<span className={style.profileContentItemTitle}>
				{ title }
			</span>

			{ result }
		</article>
	 );
}


export default BodyRepeaterProfile