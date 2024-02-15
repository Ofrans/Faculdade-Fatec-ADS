var vetor = [0,1,2,3,4,5,6,7,8,9]

var busca_binaria = (vetor, esquerdo, direito, valor) => {
    if(direito >= esquerdo) {  
        indice = parseInt(esquerdo + (direito-esquerdo) / 2)
    
        if(vetor[indice] === valor) {
            return `Valor foi encontrado e está na posição ${indice} do vetor.`
        }
        
        if(vetor[indice] > valor) {
            return busca_binaria(vetor, esquerdo, indice-1, valor)
        }
        
        return busca_binaria(vetor, indice+1, direito, valor)
    }
    return "Valor não encontrado."
}

console.log(busca_binaria(vetor, 0, vetor.length-1, Number(prompt(`Informe o valor que deseja procurar no vetor: `))))