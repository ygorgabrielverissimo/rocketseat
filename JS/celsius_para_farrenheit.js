
 // Minha Solução 

 /*

let celsius
let fahrenheit
 

 function translateValues(descritivo, value) {

    if(descritivo === "celsius") {
        let valueTransferFahren = 0;
        valueTransferFahren = ((value * (9/5)) + 32)
        console.log(`Valor em Celsius:${value} Transformado para Fahrenheit:${valueTransferFahren}`)
    
    } else if(descritivo === "fahrenheit"){

        let valueTransferCels = 0;
        valueTransferCels = ((value - 32) * (5/9))
        console.log(`Valor em fahrenheit:${value} Transformado para Celsius${valueTransferCels}`)
    }
    else{
        console.log("Descritivo não identificado")
    }
     
 }

translateValues("fahrenheit", 100)

*/

//Soluç~so professor 

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }
    
    let updatedDegree = Number(degree.toUpperCase().replace("F",""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    if(celsiusExists){
         updatedDegree = Number(degree.toUpperCase().replace("C",""))
         formula = (celsius) => (celsius * 9/5) + 32
         degreeSing = 'F'

    }
    
    return formula(updatedDegree) + degreeSing
}
    try{
       
        console.log(transformDegree('150c'))

    } catch(teste) {
        console.log(teste.messeger)
    }
    



