import ActiveUser from './ActiveUser'
import Annonce from './Annonce'

class Customer extends ActiveUser{

	annonce

	constructor(data){
		super(data)
		this.role = 0
		this.annonce = data.annonce ? new Annonce(data.annonce) : null
	}

	get getAnnonce(){
		return this.annonce
	}

	get getCustomerData(){
		return this
	}

	createAnnonce(data){
		this.annonce = new Annonce(data)
	}

	updateAnnonce(data){
		this.annonce.updateAnnonce(data)
	}

	changeAnnonceVisibility(info){
		this.annonce.setIsVisible(info)
	}

}

export default Customer