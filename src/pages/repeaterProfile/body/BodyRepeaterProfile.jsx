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
import { getByText } from '@testing-library/react'
import LoaderCircle from '../../../components/utils/loaders/LoaderCircle'

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

const BodyRepeaterProfile = () => {
	// Get global state
	const { currentUser, updateProfilePic } = useContext(currentUserContext)


	// Set locale state
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

	useEffect(() => {
		if (currentUser.getRole === 1){
			console.log("repeater")
			const {

			} = currentUser.getService
		}
	}, []);

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

	const formatUnits = (unitToFormated) => {
		const initialFormat = ""

		const unitFormated = unitToFormated.reduce((prevValue, currentValue) => {
			return `${ prevValue + ", " + currentValue }`
		}, initialFormat)

		return unitFormated
	}

	//extract data from current use
	const {
		getMinPrice,
		getCurrentGradeLevel,
		getTeachingUnit,
		getLevelsUnit,
		getCoursesType,
		getCoursesLocation,
		getDescription
	} = currentUser.getService


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
					<ImgCircle src={currentUser.getProfilePic} alt="profile" classe={style.profileImage} />

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
							<span className={style.profileName}>{ currentUser.getFullName}</span>
							<span>
								<span className={style.profileLocation}>{ `${currentUser.getTown} ( ${currentUser.getDistrict} )` }</span>
							</span>
							<p className={style.profileSubject}>
								Filières : {" "}
								{
									getTeachingUnit.length ? (
												<span>
													{ formatUnits(getTeachingUnit) }
												</span>
									) : (
										<span className='text-white text-xs italic'>Non renseigné</span>
									)
								}
							</p>
						</div>

						<div className={style.profileControl}>
							<Button size="medium" classe={`${style.profileBtn} ${style.profileBtnFirst}`}>RECOMMANDER</Button>
							<Button size="medium" classe={style.profileBtn}>CONTACTER</Button>
						</div>
					</div>

					<div className={style.profileGeneralInfo}>
						<article className={style.generalInfoItem}>
							<span>Salaire Approximatif</span>
							{
								getMinPrice ? <span>{getMinPrice}</span> : <p className='text-gray-500 text-xs font-primary italic'>Non renseigné</p>
							}
							
						</article>

						<article className={style.generalInfoItem}>
							<span>Age</span>
							{
								currentUser.getAge ? <span>{currentUser.getAge}</span> : <p className='text-gray-500 text-xs font-primary italic'>Non renseigné</p>
							}
						</article>

						<article className={style.generalInfoItem}>
							<span>Niveau Academique</span>
							{
								getCurrentGradeLevel ? <span>{getCurrentGradeLevel}</span> : <p className='text-gray-500 text-xs font-primary italic'>Non renseigné</p>
							}
						</article>
					</div>
				</div>
			</header>

			<section className={style.profileContent}>
				
				<H3>Detail de l'offre de repetition</H3>

				<div className={style.profileContentItems}>
				
					<ArticleBlock
						title="Matières"
						listElements={getTeachingUnit}
					/>

					<ArticleBlock
						title="Niveau Scolaire Enseignés"
						listElements={getLevelsUnit}
						color="#e00045"
					/>

					<ArticleBlock
						title="Type de cours"
						listElements={getCoursesType}
						color="#04e762"
					/>
					
					<ArticleBlock
						title="Lieu du cours"
						listElements={getCoursesLocation}
						color="#f77f00"
					/>
					<article className={style.profileContentItem}>
						<span className={style.profileContentItemTitle}>
							Description
						</span>

						<div className={style.profileContentItemBody}>
							{ getDescription ? getDescription : <span className="text-gray-500 text-xs font-primary italic">/*Cette partie du service n'est pas remplit*/</span> }
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

function ArticleBlock({ title, listElements, color  }) {

	const result = listElements.length ? (
		<div className={style.profileContentItemBody}>
			{ listElements.map((eltText, index) => <ProfileItem text={eltText} color={color} key={index} />) }
		</div>
	) : (
		<span className="text-gray-500 text-xs font-primary italic">/*Cette partie du service n'est pas remplit*/</span>
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