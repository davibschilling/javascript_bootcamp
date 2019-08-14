// multiple arguments
let add = function(a, b){
	return a + b
}

let result = add(10, 1)
console.log(result)

// default arguments
let getScoreText = function(name = 'Davi', score = 250){
	console.log(name)
	console.log(score) 
}

// Se nenhum argumento é passado, a função utiliza os valores padrões dos argumentos
getScoreText()

// Se o argumento é passado, são utilizados os valores passados na chamada da função
getScoreText('Pedro', 110)

let getSecondScoreText = function(name = 'Davi', score = 250){
	// console.log(name)
	// console.log(score)
	return 'Nome: ' + name + ', Score: ' + score 
}

let scoreText = getSecondScoreText()
console.log(scoreText)

// Para mudar apenas um dos valores, pode-se passar o undefined para os outros argumentos,
// retornando o valor padrão daquele argumento
let secondScoreText = getSecondScoreText(undefined, 25)
console.log(secondScoreText)