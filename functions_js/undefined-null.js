
let name

// resultado undefined
console.log(name)

name = 'Davi'

if (name === undefined){
	console.log('pls provide a name!')
} else {
	console.log(name)
}

// undefined for fuction arguments
let square = function(num){
	// irá retornar undefined pois não passado nenhum argumento
	console.log(num)
}

square()

let result = square()
// irá retornar undefined por tentar pegar um valor de uma função sem RETURN
console.log(result)

// null as assined value
let age = 29
age = null

console.log(age)
