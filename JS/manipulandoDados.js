//let string = "123"
//console.log(Number(string))
//let number = 321
//console.log(String(number))
//
//
// Conversão de string e numeros e virse e versa

// Transformar um numeto quebrado com 2 casas decimas e trocar ponto po vírgula. 

//let number = 131231.1231321321321
//console.log((number.toFixed(2).replace(".",",")))


// transformar letras minusculas em maiusculas 
//let word = "Programar é muito bacana!"
//console.log(word.toLocaleUpperCase())
//console.log(word.toLocaleLowerCase())

// Buscar objeto dentro da frase

//let phrases = "O amor é muito importante"
//console.log(phrases.includes("amor"))//

//let phrases = "O amor é muito importante"
//let myArray = phrases.split(" ")
//let phrasesWithUnderscore = myArray.join("_")
//console.log(phrasesWithUnderscore.toLocaleUpperCase())

//Criando Array com construtor. 

let myArray = new Array("A","B","C")
console.log(myArray)


// separando String em uma cadeira de caracteres. 
let word = "manipulação"
console.log(Array.from(word))

// operador ternário.

let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'café TOP' : 'café RUIM'
console.log(niceBreakfast)