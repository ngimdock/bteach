import Repeater from "./Repeater"
import Note from "./Note"

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
	owner
	categories
	notes

	constructor(data){
		this.initialization(data)
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

	 get getOwner () {
		 return this.owner
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

	/**
	* @returns array of notes given
	*/
	get getNotes(){
		return this.notes
	}
	
	get getCategories () {
		return this.categories
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
				owner,
				categories,
				notes,
				isVisible,
				isCertified
			} = data

			const allNotes = notes ? notes.map(note => new Note(note)) : []

			this.id = id
			this.documentToCertify = documentToCertify ? documentToCertify : null
			this.minPrice = minPrice
			this.currentGradeLevel = currentGradeLevel
			this.teachingUnit = [...teachingUnit]
			this.levelsUnit = [...levelsUnit]
			this.coursesType = [...coursesType]
			this.coursesLocation = [...coursesLocation]
			this.description = description
			this.owner = new Repeater(owner)
			this.categories = categories
			this.notes = [...allNotes]
			this.isVisible = isVisible
			this.isCertified = isCertified
		}
		
	}

	updateService(data){
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
				categories,
				isVisible
			} = data

			console.log(data)

			this.id = id ? id : this.id
			this.documentToCertify = documentToCertify ? documentToCertify : this.documentToCertify
			this.minPrice = minPrice ? minPrice : this.minPrice
			this.currentGradeLevel = currentGradeLevel ? currentGradeLevel : this.currentGradeLevel
			this.teachingUnit = teachingUnit ? [...teachingUnit] : [...this.teachingUnit]
			this.levelsUnit = levelsUnit ? [...levelsUnit] : [...this.levelsUnit]
			this.coursesType = coursesType ? [...coursesType] : [...this.coursesType]
			this.coursesLocation = coursesLocation ? [...coursesLocation] : [...this.coursesLocation]
			this.description = description ? description : this.description
			this.categories = categories ? categories : this.categories
			this.isVisible = isVisible
		}
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

	changeNoteVisibility(id, info){
		const index = this.notes.findIndex(note => note.id === id)
		this.notes[index].setIsVisible(info)
	}

	createNote(data){
		this.notes.push(new Note(data))
	}

	storeAllNotes(notes){
		if(notes){
			for(let note of notes){
				this.notes.push(new Note(note))
			}
		}
	}

	deleteNote(id){
		let notesTmp = this.notes.filter(note => note.getId !== id)
		this.notes = notesTmp
	}

	updateNote(id, data){
		const index = this.notes.findIndex(note => note.getId === id)
		if(index > -1){
			this.notes[index].updateNote(data)
		}
	}
}

export default Service