let temp = 16
let isFreezing = temp <= 18
let name = 'Davi'

if (isFreezing && name !== 'Davi') {
	console.log("Its freezing outside!!!")
} else if (isFreezing && name === 'Davi') {
	console.log("Its freezing outside Daviiii!!!")
} else {
	console.log("Ta de boa")
}