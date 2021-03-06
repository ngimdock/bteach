import React, { useState } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Radio from "../../../components/elements/inputs/Radio";
import ALink from "../../../components/elements/a/ALink";
import { firebaseUserCreateUser } from "../../../api/Users";
import { Navigate } from "react-router-dom";
import LoaderCircle from "../../../components/utils/loaders/LoaderCircle";
import { townSelect } from "../../../utils/townsData";
import generateDistricts from "../../../utils/generateDistricts";


const BodySignupRepeater = () => {
	// Set local state
	let [formData, setFormData] = useState({
		nom: "",
		prenom: "",
		telephone: "",
		email: "",
		password: "",
		anneeNaissance: "",
		activiteActuelle: "",
		ville: "",
		quartier: "",
		sexe: "",
	});
	const [loading, setLoading] = useState(false)
	const [redirect, setRedirect] = useState(false)

	const town1Select = ["Biteng", "Cité U", "Emana", "Etoudi", "Efoulan", "Ekounou", "Essos", "Mimboman", "Mvan", "Nkolbisson", "Nkoabang", "Ntui", "Nlonkak", "Ngoa Ekélé", "Olembé", "Yambassa"];
	const town2Select = ["Bali", "Bonaberi", "Babylone", "Bonamoussadi", "Bepanda", "Bessengue", "Denver City", "Logbassi", "Logpom", "Youpwe", "Cité Pondi", "Nkondo", "Yabassi", "Santa Barbara"];
	const town3Select = ["Atualakom", "Bambui", "Bonambappé", "Kumbo", "Nkambé", "Wum", "Mubang", "Munka", "Njenefor", "Nketesoh", "Ndogsimbi"];
	const town4Select = ["Baleng", "Banego", "Djeleng", "Famla", "Kamkop", "Ndiangbou", "Ndiangdam", "Ndiangsouoh", "Ngoueng", "Tamdja", "Toukouop"];
	const town5Select = ["Djarengol", "Domayo Galdima", "Hardéo", "Kodek", "Kodek Djarengol", "Kongola Djiddéo", "Louga Payendé Banana", "Marouaré Matakam", "Pallar", "Zokok"];
	const town6Select = ["Asseitsa", "Athoumeto", "Aza'a", "Azuenla", "Canne à sucre", "Dounga", "Femteu", "Fiankop", "Leufock", "Makemtsa"];

	const generateDistricts = () => {
		const { ville } = formData

		switch (ville) {
			case "yaoundé": {
				return town1Select.map((el) => <option key={el} value={el}>{el}</option>)
			}

			case "douala": {
				return town2Select.map((el) => <option key={el} value={el}>{el}</option>)
			}

			case "bamenda": {
				return town3Select.map((el) => <option key={el} value={el}>{el}</option>)

			}

			case "bafoussam": {
				return town4Select.map((el) => <option key={el} value={el}>{el}</option>)
			}

			case "maroua": {
				return town5Select.map((el) => <option key={el} value={el}>{el}</option>)
			}

			case "dschang": {
				return town6Select.map((el) => <option key={el} value={el}>{el}</option>)
			}

			default: break
		}
	}

	const changeSelectOptionHandler = (event) => {

		console.log(event.target)
		handleChange(event)
	};

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
				// Create a user and store his data in the database
				const { data, error } = await firebaseUserCreateUser({
					firstName: formData.nom,
					lastName: formData.prenom,
					email: formData.email,
					password: formData.password,
					phone: formData.telephone,
					date: new Date(formData.anneeNaissance).getTime(),
					sex: formData.sexe,
					town: formData.ville,
					district: formData.quartier,
					role: 1
				})

				if (data) {
					console.log("User created successfully")

					setRedirect(true)
				} else {
					console.log(error)
				}
			} catch (err) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
	}

	const validateForm = () => {
		const {
			nom,
			prenom,
			telephone,
			email,
			password,
			anneeNaissance,
			activiteActuelle,
			ville,
			quartier,
			sexe
		} = formData

		console.log(formData)

		if (
			nom &&
			prenom &&
			telephone &&
			email &&
			password &&
			anneeNaissance &&
			activiteActuelle &&
			ville &&
			quartier &&
			sexe 
		) {
			return true
		}

		return false
	}

	return (
		<div style={{ opacity: loading ? .6:1 }} className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-xl mx-auto font-primary">
			{
				redirect && <Navigate to="/" />
			}

			{
				loading && <LoaderCircle size="normal" />
			}
			
			
			<H3 color="#00171f" classe="mb-10 text-center">
				Suivre les étapes pour s'inscrire en tant repétiteur qui offre des services
				
			</H3>
			<form
				className="shadow-md-x py-5 px-3 sm:px-5 sm:py-7 rounded-xl flex flex-col w-full"
			>
				<Input
					type="text"
					name="nom"
					id="nom"
					value={formData.nom}
					placeholder="Nom*"
					handleChange={handleChange}
				/>
				<Input
					type="text"
					name="prenom"
					id="prenom"
					value={formData.prenom}
					placeholder="Prenom*"
					handleChange={handleChange}
				/>
				<Input
					type="text"
					name="telephone"
					id="telephone"
					value={formData.telephone}
					placeholder="Teléphone*"
					handleChange={handleChange}
				/>
				<Input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					placeholder="E-mail*"
					handleChange={handleChange}
				/>
				<Input
					type="password"
					name="password"
					id="password"
					value={formData.password}
					placeholder="Mot de passe*"
					handleChange={handleChange}
				/>
				<Input
					type="date"
					name="anneeNaissance"
					id="anneeNaissance"
					value={formData.anneeNaissance}
					placeholder="Date de naissance*"
					handleChange={handleChange}
					icone={<BsFillCalendarDateFill />}
				/>
				<Input
					type="text"
					name="activiteActuelle"
					id="activiteActuelle"
					value={formData.activiteActuelle}
					placeholder="Activité actuelle*"
					handleChange={handleChange}
				/>
				<select
					name="ville"
					onChange={changeSelectOptionHandler}
					className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
				>
					<option value="">Ville*</option>
					<option value="yaoundé">Yaounde</option>
					<option value="douala">Douala</option>
					<option value="bamenda">Bamenda</option>
					<option value="bafoussam">Bafoussam</option>
					<option value="dschang">Dschang</option>
					<option value="maroua">Maroua</option>
				</select>
				<select
					name="quartier"
					onChange={changeSelectOptionHandler}
					className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
				>
					<option value="">
						Quartier* (choisissez le quartier le plus proche de chez vous)
					</option>
					{
						generateDistricts(formData.ville)
					}
				</select>

				<div className="flex text-gray-400 mb-3">
					<span className="mr-3">Sexe*</span>
					{["homme", "femme"].map((sexe) => (
						<Radio
							key={sexe}
							name="sexe"
							id={sexe}
							value={sexe}
							state={formData.sexe}
							handleChange={handleChange}
						/>
					))}
				</div>
				<button onClick={handleSubmit} className="self-end flex items-center px-4 py-1.5 mb-2 mt-6 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 sm:px-5">
					<span className="text-sm tracking-wide opacity-90">Terminer</span>
				</button>
			</form>

			<div className="mt-5">
				<span>Vous avez déjà un compte repétiteur ? <ALink link="/sign_in">connectez-vous</ALink></span>
			</div>
		</div>
	);
};

export default BodySignupRepeater;
