// Documentação array
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = ['Note 1', 'Note 2', 'Note 3']

// Retira o ultimo item da lista
notes.pop()

// // Retira o primeiro item da lista
notes.shift()

// // Adiciona o item ao final da lista
notes.push('Note 4')

// // Adiciona ao início da lista
notes.unshift('Adicionei agora!')

// Remove itens da lista
// primeiro argumento: index inicial
// segundo argumento: quantos itens serão removidos
// Terceiro argumento: adiciona um item
notes.splice(1, 2, 'Novo item')

// Modifica determinado item do array baseado no index
notes[2] = 'new note 3'