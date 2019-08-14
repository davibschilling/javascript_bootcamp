
const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.indexOf('Note 2'))

const notas = [{
	title: 'doideira',
	body: 'Assim que eu gosto'
}, {
	title: 'uepa',
	body: 'Olha olha hein!'
}]


// const findNota = function(notas, notaTitle) {
// 	const index = notas.findIndex(function(nota, index){
// 		return nota.title.toLowerCase() === notaTitle.toLowerCase()
// 	})
// 	return notas[index]
// }

// const nota = findNota(notas, 'doideira')
// console.log(nota)


const findNota = function(notas, notaTitle) {
	return notas.find(function(nota, index){
		return nota.title.toLowerCase() === notaTitle.toLowerCase()
	})
}



const deleteNota = function(notas, notaTitle) {
	const index = notas.findIndex(function(nota){
		return nota.title.toLowerCase() === notaTitle.toLowerCase()
	})

	if (index > -1){
		notas.splice(index, 1)
	}

}

console.log(notas)
deleteNota(notas, 'doideira')
console.log(notas)