import User from './User'

class Administrator extends User{

	constructor(data){
		super(data)
		this.role = 3
	}

	get getAdministratorData(){
		return this
	}

	deleteRepeater(id){
		//code here
	}

	certifyRepeater(id){
		//code here
	}

	responseFeedback(){
		
	}
}

export default Administrator