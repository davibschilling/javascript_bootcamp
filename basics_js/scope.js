// Tipos de escopo

// lexical (estático)
// global (definido fora de todos blocos de código)
// local (definido dentro de um bloco de código)

// OBS: Se nenhuma variável for declarada com o let
// e esta receber uma valor
	// name = 'Davi'
// mesmo que o valor tenha sido conferido em um bloco de código
// uma variável global é declarada, podendo afetar negativamente
// na lógica do sistema

// variavel global
let varOne = 'varOne'

if (true) {

	// ERROR
	// console.log(varOne)
	// Conflito entre a variável global e local
	
	let varOne = 'mudei'

	if (true) {
		// reconhece apenas a local
		console.log(varOne)
	}

	let varTwo = 'varTwo'
	// não da error pois não tem conflito entre variáveis
	console.log(varTwo)
}

if (true) {
	// reconhece apenas a global
	console.log(varOne)
}