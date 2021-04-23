// Minha Solução

/*
let aluno = {
    name: "Ygor",
    age: 28,
    nota: 100
}

function calcularNota(nota)  {
   
    if (nota >= 90){
        console.log(`Nota ${nota} conversão A`)
    } else if (aluno.nota >= 80 && nota < 90){
        console.log(`Nota ${nota} conversão B`) 

    } else if(nota >= 70 && nota < 80){
        console.log(`Nota ${nota} conversão C`) 

    } else if(nota >= 60 && nota < 80){
        console.log(`Nota ${nota} conversão D`) 

    } else{
        console.log(`Nota ${nota} conversão F`) 
    }       
}

calcularNota(aluno.nota)
*/

// ********** Solução Professor *************** 



function getScore(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0
    
    let scoreFinal;
    
    if(scoreA){
        scoreFinal = 'A'
    } else if(scoreB){
        scoreFinal = 'B'
    } else if(scoreC){
        scoreFinal = 'C'
    } else if(scoreD){
        scoreFinal = 'D'
    } else if(scoreF){
        scoreFinal = 'F'
    } else {
        scoreFinal = "Nota Inválida Inválido"
    }

    return scoreFinal
}

let part= 0;
for(let i = 0; i <= 10; i++){
    part = Math.floor(Math.random() * 100);
    console.log(getScore(part))      

}