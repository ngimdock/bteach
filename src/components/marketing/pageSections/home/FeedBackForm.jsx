import React, { useContext, useEffect, useState } from "react";

import Container from '../../../utils/Container';

import image from "../../../../medias/illustrations/feedback.png"
import currentUserContext from "../../../../dataManager/context/currentUserContext";
import LoaderCircle from "../../../../components/utils/loaders/LoaderCircle"
import { firebaseCreateFeebacks } from "../../../../api/Feedbacks";

const FeedBackForm = () => {
	// Get global state
	const { currentUser } = useContext(currentUserContext)

	// Set local state
	let [formData, setFormData] = useState({
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false)

	// UseEffect section

	useEffect(() => {
		if (currentUser) {
			const formDataClone = {...formData}

			formDataClone.email = currentUser.getEmail

			setFormData(formDataClone)
		}
	}, [currentUser])

	// Some handlers

	const handleChange = (event) => {
		if (!loading) {
			setFormData({
				...formData,
				[event.target.name]: event.target.value,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (validateForm() && !loading) {
			setLoading(true)

			try {
				const idUser = currentUser ? currentUser.getId : null

				const { data } = await firebaseCreateFeebacks(idUser, formData)

				if (data) {
					alert("Feedback sent")

					setFormData({ ...formData, message: "" })
				}
			} catch (err) {
				console.log(err)

				alert("Error occurs")
			} finally {
				setLoading(false)
			}
		} else {
			alert("Fill correctly the form")
		}
	}

	const validateForm = () => {
		const {
			email,
			message
		} = formData

		if (email && message) {
			return true
		}

		return false
	}

	return(
		<div style={{ position: "relative", opacity: loading ? .7:1 }} className="bg-gray-100">
			{
				loading && <LoaderCircle size="large" />
			}
			
			<Container classe="mt-20 md:mt-32 py-12">
				<div className="grid lg:grid-cols-2">
					<div className="lg:pr-16 lg:mt-12 mb-20">
						<img src={image} alt="feedback" className="lg:mt-16 feedback-img" />
					</div>
					<div className="px-2 feedback-form">
						<form onSubmit={handleSubmit}>
							<p className="text-2xl font-normal lg:my-5">Ajoutez un avis</p>
							<input
								type="email"
								name="email"
								value={formData.email}
								placeholder="Email"
								onChange={handleChange}
								className="pl-5 py-3 my-3 focus:border-blue-300 duration-300 outline-none border-b-2 border-primary w-full"
							/>
							<textarea 
								cols="30" 
								rows="10"
								type="text-area"
								name="message"
								value={formData.message}
								placeholder="Add comment"
								onChange={handleChange}
								className="pl-5 py-3 mt-3 focus:border-blue-300 outline-none border-b-2 border-primary w-full"
							></textarea>
							<div className="ml-auto">
								<button type="submit" className="px-4 py-1.5 mb-2 mt-6 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 sm:px-5">
									<span className="text-sm tracking-wide opacity-90">Publier un avis</span>
								</button>
							</div>
						</form>
					</div>
				</div>

			</Container>
		</div>
	);
}

export default FeedBackForm;