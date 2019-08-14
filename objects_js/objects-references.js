let myAccount = {
	name: 'Davi Batista',
	expenses: 0,
	income: 0
}

let addExpense = function(account, amount){
	account.expenses = account.expenses + amount
	console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)

// As duas saídas mostram os mesmos valores, pois
// o objeto passado como argumento é modificado na função