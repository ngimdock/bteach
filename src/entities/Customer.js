import ActiveUser from './ActiveUser'
import Annonce from './Annonce'

class Customer extends ActiveUser{

	annonce

	constructor(data){
		super(data)
		this.annonce = null
	}

	get getAnnonce(){
		return this.annonce
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