//Phrases() {
//g("Estdar é muito bom")
//g("Estdar é excelente")
//g("Estdar é o principio da prosperidade")
//
//
//
//

// 0
// function(number1, number2){
//otal = 0
// = number1 + number2
//n total
//
//(sum(2,3))
//(total)
//
//Name = () =>{
//.log("Ygor")
//
//
//

//
//function sayMyName(name){
//    console.log("Antes de executar a função")
//
//    name()
//
//    console.log(" Depois de executar a callback")
//}
//
//sayMyName(
//    () => {
//    console.log("Estou em uma funcção callback")
//    }
//)
//

function Person(name){
 this.name = name
 this.walk =  function(){
     return this.name + " Está andando"
 }   
}

const usuario = new Person("Ygor Gabriel")
const usuario1 = new Person("Bruan Suellen")

console.log(usuario.walk())
console.log(usuario1.walk()) 