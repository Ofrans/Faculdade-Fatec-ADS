var vetor = []
vetor = [10,1,7,3,5]

function selecao_direta(vetor){
    var menor; var pos
    for (let i=0;i<5;i++){
        menor = vetor[i]
        pos = i
        for(let j=0;j<5;j++){
            if (vetor[j] > menor){
                menor = vetor[j]
                pos = j
            }
        }
        var aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
    console.log(vetor[0],vetor[1],vetor[2],vetor[3],vetor[4])
}
console.time('Seleção direta')
selecao_direta(vetor)
console.timeEnd('Seleção direta')
