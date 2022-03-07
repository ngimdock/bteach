import Note from "./Note"

class User{

	id;
	name;
	firstName;
	email;
	password;
	phone1;
	phone2;
	date;
	sex;
	town;
	district;
	profilePic;
	notes;

	constructor(data){
		this.initialization(data) 
	}

	get getId(){
		return this.id
	}

	/**
	 * @returns string
	 */
	 get getName(){
	 	return this.name
	 }

	 /**
	 * @returns string
	 */
	 get getFirstName(){
	 	return this.firstName
	 }

	 /**
	 * @returns string
	 */
	 get getEmail(){
	 	return this.email
	 }

	 /**
	 * @returns string
	 */
	 get getPassword(){
	 	return this.password
	 }

	 /**
	 * @returns number
	 */
	 get getPhone1(){
	 	return this.phone1
	 }

	 /**
	 * @returns number
	 */
	 get getPhone2(){
	 	return this.phone2
	 }

	 /**
	 * @returns date
	 */
	 get getDate(){
	 	return this.date
	 }

	 /**
	 * @returns 0 | 1
	 */
	 get getSex(){
	 	return this.sex
	 }

	 /**
	 * @returns string
	 */
	 get getTown(){
	 	return this.town
	 }

	 /**
	 * @returns string
	 */
	 get getDistrict(){
	 	return this.district
	 }

	 /**
	 * @returns image
	 */
	 get getProfilePic(){
	 	return this.profilePic
	 }

	 /**
	 * @returns array of notes given
	 */
	 get getNotes(){
	 	return this.notes
	 }

	initialization(data){
		if(data){
			const {
				id,
				name,
				firstName,
				email,
				password,
				phone1,
				phone2,
				date,
				sex,
				town,
				district,
				profilePic,
				notes
			} = data

			const allNotes = notes ? notes.map(note => new Note(note)) : []

			this.id = id
			this.name = name
			this.firstName = firstName
			this.email = email
			this.password = password
			this.phone1 = phone1
			this.phone2 = phone2
			this.date = date
			this.sex = sex
			this.town = town
			this.district = district
			this.profilePic = profilePic
			this.notes = allNotes
		}
	}

	
	setProfilePic(newPic){
		this.profilePic = newPic
	}

	updateUser(data){
		const {
			name,
			firstName,
			email,
			password,
			phone1,
			phone2,
			date,
			sex,
			town,
			district,
		} = data

		this.name = name
		this.firstName = firstName
		this.email = email
		this.password = password
		this.phone1 = phone1
		this.phone2 = phone2
		this.date = date
		this.sex = sex
		this.town = town
		this.district = district
	}

	changeNoteVisibility(id){
		const index = this.notes.findIndex(note => note.id === id)
		this.notes[index].setIsVisible()
	}

	createNote(note){
		this.notes.push(new Note(note))
	}

	deleteNote(id){
		let notesTmp = this.notes.filter(note => note.getId !== id)
		this.notes = notesTmp
	}

	updateNote(id, data){
		const index = this.notes.findIndex(note => note.getId === id)
		this.notes[index].updateNote(data)
	}
}

export default User