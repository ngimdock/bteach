import User from './User'
import Feedback from './Feedback'

class ActiveUser extends User {

	feedbacks

	constructor(data){
		super(data)
		const allFeedback = data.feedbacks ? data.feedbacks.map(feedback => new Feedback(feedback)) : []
		this.feedbacks = allFeedback
	}

	/**
	 * @returns Array of feedback
	 */
	 get getFeedbacks(){
	 	return this.feedbacks
	 }


	createFeedback(data){
		const feedback = new Feedback(data)
		this.feedbacks.push(feedback)
	}

	deleteFeedback(id){
		const feedbacksTmp = this.feedbacks.filter(feedback => feedback.getId !== id)
		this.feedbacks = feedbacksTmp
	}

	updateFeedback(id, data){
		console.log("lol")
		const index = this.feedbacks.findIndex(feedback => feedback.getId === id)
		
		if(index > -1){
			this.feedbacks[index].updateFeedback(data)
		}
	}
}

export default ActiveUser