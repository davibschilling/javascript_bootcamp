const notas = [{
	title: 'doideira',
	body: 'Assim que eu gosto'
}, {
	title: 'uepa',
	body: 'Olha olha hein!'
}]

// const filteredNotas = notas.filter(function(nota, index){
// 	const isTitleMatch = nota.title.toLowerCase().includes('go')
// 	const isBodyMatch = nota.body.toLowerCase().includes('go')
// 	return isTitleMatch || isBodyMatch
// })
// console.log(filteredNotas)

// Filtrando com o include
const findNotas = function(notas, query){
	return notas.filter(function(nota, index){
		const isTitleMatch = nota.title.toLowerCase().includes(query.toLowerCase())
		const isBodyMatch = nota.body.toLowerCase().includes(query.toLowerCase())
		return isTitleMatch || isBodyMatch
	})
}
console.log(findNotas(notas, 'doideira'))