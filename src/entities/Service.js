
class Service{
	id
	isVisible
	isCertified
	documentToCertify
	minPrice
	currentGradeLevel
	teachingUnit
	levelsUnit
	coursesType
	coursesLocation
	description

	constructor(data){
		this.initialization(data)
		this.isCertified = 0
	}

	get getServiceData(){
		return this
	}

	get getId() {
		return this.id
	}

	/**
	 * @returns boolean
	 */
	 get getIsVisible(){
	 	return this.isVisible
	 }

	 /**
	 * @returns boolean
	 */
	 get getIsCertified(){
	 	return this.isCertified
	 }

	 /**
	 * @returns file
	 */
	 get getDocumentToCertify(){
	 	return this.documentToCertify
	 }

	/**
	 * @returns Number
	 */
	 get getMinPrice(){
	 	return this.minPrice
	 }

	 /**
	 * @returns string
	 */
	 get getCurrentGradeLevel(){
	 	return this.currentGradeLevel
	 }

	 /**
	 * @returns Array of unit
	 */
	 get getTeachingUnit(){
	 	return this.teachingUnit
	 }

	 /**
	 * @returns Array to the levels of unit
	 */
	 get getLevelsUnit(){
	 	return this.levelsUnit
	 }

	 /**
	 * @returns Array of type of courses
	 */
	 get getCoursesType(){
	 	return this.coursesType
	 }

	 /**
	 * @returns Array of locations of the courses
	 */
	 get getCoursesLocation(){
	 	return this.coursesLocation
	 }

	 get getDescription(){
	 	return this.description
	 }

	initialization(data){
		if(data){

			const{
				id,
				minPrice,
				documentToCertify,
				currentGradeLevel,
				teachingUnit,
				levelsUnit,
				coursesType,
				coursesLocation,
				description,
				isVisible
			} = data

			this.id = id
			this.isVisible = isVisible
			this.documentToCertify = documentToCertify ? documentToCertify : null
			this.minPrice = minPrice
			this.currentGradeLevel = currentGradeLevel
			this.teachingUnit = [...teachingUnit]
			this.levelsUnit = [...levelsUnit]
			this.coursesType = [...coursesType]
			this.coursesLocation = [...coursesLocation]
			this.description = description
		}
		
	}

	updateService(data){
		this.initialization(data)
	}

	setIsVisible(info){ // change visibility of the service
		this.isVisible = info
	}

	setIsCertified(info){
		if(info){
			if(this.documentToCertify){
				this.isCertified = info
			}else{
				throw new Error(
			        "ERROR: This repeater did not provide the document(diploma) to certify his service"
			      );
			}
		}else{
			this.documentToCertify = info
		}
	}

	setDocumentToCertify(document){
		this.documentToCertify = document
	}
}

export default Service