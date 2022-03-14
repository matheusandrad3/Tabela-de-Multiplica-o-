function tabelaDeMultiplicacao(numero){
    let resultadoTotal = [];

for (let i = 0; i <= numero; i ++){
    resultadoTotal[i] =[];
    for (let j = 0; j <= numero; j++){ 
     resultadoTotal[i][j] = i * j; 
    }
}
    return resultadoTotal;
}
let result = tabelaDeMultiplicacao(10);
console.table(result);

