
class Note{
	id;
	stars;
	messages;
	isVisible;
	service;
	author; //id for person who send the note

	constructor(data){
		const { id, stars, message, service, author } = data

		this.id = id
		this.stars = stars
		this.message = message
		this.isVisible = 1
		this.service = service
		this.author = author
	}


	 get getId(){
	 	return this.id
	 }

	/**
	 * @returns number
	 */
	 get getStars(){
	 	return this.stars
	 }

	 /**
	 * @returns string
	 */
	 get getMessage(){
	 	return this.message
	 }

	 /**
	 * @returns boolean
	 */
	 get getIsVisible(){
	 	return this.isVisible
	 }

	/**
	 * @returns number
	 */
	  get getService(){
		return this.service
	}

	/**
	 * @returns number
	 */
	 get getAuthor(){
		return this.author
	}


	 updateNote(data){
	 	const { stars, message } = data
	 	this.stars = stars
	 	this.message = message
	 }

	 setIsVisible(info){
	 	this.isVisible = info
	 }
}

export default Note