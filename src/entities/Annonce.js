
class Annonce{

	isVisible
	classLevel
	units
	message

	constructor(data){
		this.initialization(data)
		this.isVisible = 1
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
			this.classLevel = classLevel
			this.units = [...units]
			this.message = message
		}
	}

	updateAnnonce(data){
		if(data){
			const {
				id,
				classLevel,
				units,
				message,
				isVisible
			} = data

			console.log(units)

			this.id = id
			this.classLevel = classLevel ? classLevel : this.classLevel
			this.units = units ? [...units] : [...this.units]
			this.message = message ? message : this.message
		}
	}

	setIsVisible(info){
		this.isVisible = info
	}
}

export default Annonce