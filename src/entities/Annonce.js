
class Annonce{

	isVisible
	classLevel
	units
	message

	constructor(data){
		this.initialization(data)
		this.isVisible = true
	}

	get getAnnonceData(){
		return this
	}

	/**
	 * @returns boolean
	 */
	 get getIsVisible(){
	 	return this.isVisible
	 }

	 /**
	 * @returns String
	 */
	 get getClassLevel(){
	 	return this.classLevel
	 }

	 /**
	 * @returns Array of units
	 */
	 get getUnits(){
	 	return this.units
	 }

	 /**
	 * @returns String
	 */
	 get getMessage(){
	 	return this.message
	 }

	initialization(data){
		if(data){
			const {
				classLevel,
				units,
				message
			} = data

			this.classLevel = classLevel
			this.units = [...units]
			this.message = message
		}
	}

	updateAnnonce(data){
		this.initialization(data)
	}

	setIsVisible(){
		this.isVisible = !this.isVisible
	}
}

export default Annonce