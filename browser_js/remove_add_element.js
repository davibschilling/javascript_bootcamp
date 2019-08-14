// Busca as todas as tags p
const pTags = document.querySelectorAll('p')

// remove as tags p que possuem 'the' no texto
pTags.forEach(function(p){
	if (p.textContent.includes('the')) {
		p.remove()
	}
})

// cria um elemento p
const newP = document.createElement('p')
// Insere texto no elemento
newP.textContent = 'novo elemento JS'
// Adiciona o elemento a outra tag do HTML
document.querySelector('body').appendChild(newP)