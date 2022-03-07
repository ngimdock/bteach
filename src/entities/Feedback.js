
class Feedback{

	id
	title
	message

	constructor(data){
		if(data){
			const { id, title, message } = data
			this.id = id
			this.title = title
			this.message = message
		}
	}

	/**
	 * @returns String
	 */
	 get getId(){
	 	return this.id
	 }

	 /**
	 * @returns String
	 */
	 get getTitle(){
	 	return this.title
	 }

	 /**
	 * @returns String
	 */
	 get getMessage(){
	 	return this.message
	 }

	updateFeedback({ title, message }){
		this.title = title
		this.message = message
	}
}

export default Feedback