
let temperature = 38
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 36.6

if (highTemperature) {
    console.log("Febre")

} else if (mediumTemperature) {
    console.log("Melhorando")
} else {
    console.log("Alta")
}

function calculadora (number1, operador, number2){
    let result 
    switch (operador) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log("Operador não encontrado")
            break
    }
    return result

}

console.log(calculadora(4, '+', 8))

function sayMyname(name = ''){
    if (name === ''){
        throw "Nome é obrigatório"
    }  
    console.log(name)  
}
try{
    sayMyname("teste")

} catch(e){
    console.log(e)
}
console.log("Depois do erro")

//r (let i =0; i <= 10; i++ ){
// if(i === 5){
//  continue;
// }
// console.log(i)
//
//
//r (let i =0; i <= 10; i++ ){
//  if(i === 5){
//   break;
//  }
//  console.log(i)
//

 e = 5614;
 while(e > 10){
     e /= 30
     console.log(e)
 }

 // for...of

 let name1 = "ygor"
 let names = ['Gabriel','Schulz','Verissimo']

 for(let char of names){
     console.log(char)
 }

 //for...in
 let person ={
     name: "Ygor",
     age: 28,
     weight: 120
 }
 for (let preporty in person){
     console.log(preporty)
 }



