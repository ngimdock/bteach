
class Note{
	id;
	stars;
	messages;
	isVisible;
	idService;
	idSender; //id for person who send the note

	constructor(data){
		const { id, stars, message, idService, idSender } = data

		this.id = id
		this.stars = stars
		this.message = message
		this.isVisible = 1
		this.idService = idService
		this.idSender = idSender
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
	  get getIdService(){
		return this.idService
	}

	/**
	 * @returns number
	 */
	 get getIdSender(){
		return this.idSender
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