const notes = ['Note 1', 'Note 2', 'Note 3']

// Implementa um determinado codigo para cada item do array
notes.forEach(function(item, index) {
	const num = index + 1
	console.log(`${num} = ${item}`)
})

console.log(notes)

// Os parametros passado para o for loop são:
// 1 -> inicializador
// 2 -> condição
// 3 -> expresão
for (let count = 0; count <= notes.length; count++) {
	console.log(count)
}