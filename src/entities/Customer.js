import User from './User'
import Annonce from './Annonce'

class Customer extends User{

	annonce

	constructor(data){
		super(data)
		this.annonce = null
	}

	get getAnnonce(){
		return this.annonce
	}

	createAnnonce(data){
		this.annonce = (new Annonce(data)).getAnnonceData
	}

	updateAnnonce(data){
		this.annonce.updateAnnonce(data)
	}

	changeVisibility(){
		this.annonce.setIsVisible()
	}

}

export default Customer