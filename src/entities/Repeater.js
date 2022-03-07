import User from './User'
import Service from './Service'

class Repeater extends User {

	service

	constructor(data){
		super(data)
		this.service = null
	}

	/**
	 * @returns string
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

	 changeVisibility(){ //To show and hide the visibility of the service
	 	this.service.setIsVisible()
	 }
}

export default Repeater