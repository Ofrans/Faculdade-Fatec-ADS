let vetor = []; let aux
    vetor = [10,1,7,3,5]

function crescente(vetor,aux){
    for (let i=0;i<5;i++){
        for (let j=0;j<5;j++){
            if(vetor[j] > vetor[j+1]){
                aux = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux
            }
        }
    }
    console.log(vetor[0],vetor[1],vetor[2],vetor[3],vetor[4])
}
crescente(vetor)

