// Busca a tag button
// Adiciona o evento click e uma função
// Printando o elemento <e> da função no console, pode-se visualizar todas as infos do evento
document.querySelector('button').addEventListener('click', function (e) {
	console.log('Did this work?')
	console.log(e)
	// Através das propriedades do evento é possivel por exemplo
	// mudar o nome do botão que originou o evento
	e.target.textContent = 'Acho q foi'
})