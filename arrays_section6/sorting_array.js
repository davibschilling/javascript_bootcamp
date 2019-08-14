const notas = [{
	title: 'xdoideira',
	body: 'Assim que eu gosto',
	sponsored: true
}, {
	title: 'uepa',
	body: 'Olha olha hein!',
	sponsored: false
}]

// const sortTitle = function(notas){
// 	notas.sort(function(a, b) {
// 		if (a.title.toLowerCase() < b.title.toLowerCase()){
// 			return -1
// 		} else if(b.title.toLowerCase() < a.title.toLowerCase()){
// 			return 1
// 		} else {
// 			return 0
// 		}
// 	})
// }

// sortTitle(notas)
// console.log(notas)


const sortSponsored = function(notas){
	notas.sort(function(a, b) {
		if (a.sponsored && !b.sponsored){
			return -1
		} else if(b.sponsored < !a.sponsored){
			return 1
		} else {
			return 0
		}
	})
}

sortSponsored(notas)
console.log(notas)