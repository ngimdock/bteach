import Note from "./Note"

class User{

	id;
	role;
	name;
	firstName;
	email;
	password;
	phone;
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
	 * @returns 0 | 1 | 2
	 */
	 get getRole(){
	 	return this.role
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
	 get getPhone(){
	 	return this.phone
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

	get getFullName () {
		return `${this.firstName[0].toUpperCase() + this.firstName.substr(1)} ${this.name[0].toUpperCase() + this.name.substr(1)}`
	}

	initialization(data){
		if(data){
			const {
				id,
				name,
				firstName,
				email,
				password,
				phone,
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
			this.phone = phone
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

	updateInfo(data){
		const {
			name,
			firstName,
			email,
			password,
			phone,
			date,
			sex,
			town,
			district,
		} = data

		this.name = name
		this.firstName = firstName
		this.email = email
		this.password = password
		this.phone = phone
		this.date = date
		this.sex = sex
		this.town = town
		this.district = district
	}

	changeNoteVisibility(id, info){
		const index = this.notes.findIndex(note => note.id === id)
		this.notes[index].setIsVisible(info)
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
		if(index > -1){
			this.notes[index].updateNote(data)
		}
	}
}

export default User