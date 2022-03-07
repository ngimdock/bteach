
class Service{

	isVisible
	minPrise
	currentGradeLevel
	teachingUnit
	levelsUnit
	coursesType
	coursesLocation
	description

	constructor(data){
		this.initialization(data)
	}

	get getServiceData(){
		return this
	}

	/**
	 * @returns boolean
	 */
	 get getIsVisible(){
	 	return this.isVisible
	 }

	/**
	 * @returns Number
	 */
	 get getMinPrise(){
	 	return this.minPrise
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
				minPrise,
				currentGradeLevel,
				teachingUnit,
				levelsUnit,
				coursesType,
				coursesLocation,
				description
			} = data

			this.isVisible = true
			this.minPrise = minPrise
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

	setIsVisible(){ // change visibility of the service
		this.isVisible = !this.isVisible
	}
}

export default Service