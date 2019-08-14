// declarando os objetos
let myBook = {
	year: '1984',
	author: 'Davi',
	pageCount: 326
}

let otherBook = {
	year: '2019',
	author: 'Bruno',
	pageCount: 734
}

// visualização do objeto
console.log(myBook)
// visualização do atributo year
console.log(myBook.year)
// modificando valor do atributo author
myBook.author = 'Pedro'
// visualização do objeto
console.log(myBook)

// função que retorna a quantidade de páginas do livro
let getPageCount = function(book){
	return book.pageCount
}

// declarando a variável que irá receber o retorno das funções
let pageCount
pageCount = getPageCount(myBook)
console.log(`Número de páginas é: ${pageCount}`)
pageCount = getPageCount(otherBook)
console.log(`Número de páginas é: ${pageCount}`)

// define objeto de retorno dentro da função
let getBookAttributes = function(book){
	return {
		anoLancamento: `O ano de lançamento foi ${book.year}`,
		nomeAutor: `O autor deste livro é o ${book.author}`
	}
}

let infosBook
infosBook = getBookAttributes(myBook)
// utiliza o atributo anoLancamento da função
console.log(infosBook.anoLancamento)
infosBook = getBookAttributes(otherBook)
// utiliza o atributo nomeAutor da função
console.log(infosBook.nomeAutor)