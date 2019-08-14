const notas = [{
	title: 'doideira',
	body: 'Assim que eu gosto'
}, {
	title: 'uepa',
	body: 'Olha olha hein!'
}]

// Cria uma nota para cada objeto com o elemento p (paragrafo)
notas.forEach(function(nota){
	const newP = document.createElement('p')
	newP.textContent = `${nota.title} - ${nota.body}`
	document.querySelector('body').appendChild(newP)
})