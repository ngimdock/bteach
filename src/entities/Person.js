import User from './User'
import Feedback from './Feedback'

class Person extends User {
	feedbacks

	constructor(data, feedbacks){
		super(data)
		this.feedbacks = feedbacks ? feedbacks.map(feedback => new Feedback(feedback)) : []
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
		const index = this.feedbacks.findIndex(feedback => feedback.id === id)
		this.feedbacks[index].updateFeedback(data)
	}
}

export default Person