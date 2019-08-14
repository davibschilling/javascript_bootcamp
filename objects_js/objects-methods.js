let restaurant = {
	name: 'house82',
	guestCapacity: 30,
	guestCount: 0,
	// declarando o método do objeto
	checkAvailability: function(partySize){
		// this para acessar atributos do objeto
		let capacity = this.guestCapacity
		if (capacity < partySize){
			return `Acabaram as vagas`
		} else{
			return `chega pra dentro`
		}

	}
}

let status = restaurant.checkAvailability(31)
console.log(status)