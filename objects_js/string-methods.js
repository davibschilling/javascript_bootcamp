
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
// site oficial do javascript
// link sobre as propriedades e métodos das strings

let name = '  Davi Batista '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
// Remove espaços desnecessários de uma string
console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))