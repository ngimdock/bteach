import Person from './Person'
import Service from './Service'

class Repeater extends Person {

	service

	constructor(data){
		super(data)
		this.service = null
	}

	/**
	 * @returns {Service}
	 */
	get getService(){
	 	return this.service 
	}

	createService(data){
	 	this.service = (new Service(data)).getServiceData
	}

	updateService(data){
	 	this.service.updateService(data)
	}

	changeVisibility(info){ //To show and hide the visibility of the service
	 	this.service.setIsVisible(info)
	}
}

export default Repeater