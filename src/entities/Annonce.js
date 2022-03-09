
class Annonce{

	id
	isVisible
	classLevel
	units
	message

	constructor(data){
		this.initialization(data)
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
				id,
				classLevel,
				units,
				message,
				isVisible
			} = data

			this.id = id
			this.isVisible = isVisible
			this.classLevel = classLevel
			this.units = [...units]
			this.message = message
		}
	}

	updateAnnonce(data){
		this.initialization(data)
	}

	setIsVisible(info){
		this.isVisible = info
	}
}

export default Annonce