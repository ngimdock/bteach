
class Feedback{

	id
	title
	message
	date

	constructor(data){
		if(data){
			const { id, title, message, date } = data
			this.id = id
			this.title = title
			this.message = message
			this.date = date
		}
	}

	/**
	 * @returns {String}
	 */
	 get getId(){
	 	return this.id
	 }

	 /**
	 * @returns {String}
	 */
	 get getTitle(){
	 	return this.title
	 }

	 /**
	 * @returns {String}
	 */
	 get getMessage(){
	 	return this.message
	 }

	 /**
		* @returns {Number}
	  */
	 get getDate() {
		 return this.date
	 }

	updateFeedback({ title, message }){
		this.title = title
		this.message = message
	}
}

export default Feedback