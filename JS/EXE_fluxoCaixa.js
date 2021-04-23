
/*
let controleFluxo = {
    receitas: [3200, 1100, 1000, ],
    despesas: [2500, 892, 600, 1000, 500, 600 ]
}


function sum(array){
     total = 0;

     for(let value of array){
          total += value
     }   

     return total;
}

totalReceitas = sum(controleFluxo.receitas)
totolDespesas = sum(controleFluxo.despesas)

function calcularDeCaixa(receitas, despesas){
     
     let total = receitas - despesas;
     console.log(total)

     if ( total < 0 ){   
          console.log(`Fechamento total:${total} NEGATIVO`)
     } else{
          console.log(`Fechamento total:${total} POSITIVO`)
     }

}

calcularDeCaixa(totalReceitas, totolDespesas)
*/

 // Forma do professor resolver a questão

 let famaly = {
     incomes: [10000 ],
     expenses: [892, 600, 1000, 500, 600 ]
 }

 
 function sum(array){
     total = 0;
     for(let value of array){
          total += value
      }
      
     return total
 } 
 function calculateBalance(){
      const calculateIncons = sum(famaly.incomes)
      const calculateExpenses = sum(famaly.expenses)

      const total = calculateIncons - calculateExpenses
      
      const itsok = total >= 0

      let balanceText = "Negativo"

      if(itsok){
          balanceText = "Positivo"
      }
      
      console.log(`Seu saldo é ${balanceText}: ${total}`)
 }

 calculateBalance()