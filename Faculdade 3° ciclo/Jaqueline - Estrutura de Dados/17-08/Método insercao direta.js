var vetor = []
vetor = [10,1,7,3,5]

function insercao_direta(vetor){
    for (var i=1;i<vetor.length;i++){
        for(var j=0;j<vetor.length;j++){
            if (vetor[i] < vetor[j]){
                var aux = vetor[i]
                for( var k = i; k > j; k--){
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = aux
            }
        }
    }
    console.log(vetor[0],vetor[1],vetor[2],vetor[3],vetor[4])
}
console.time('Seleção direta')
insercao_direta(vetor)
console.timeEnd('Seleção direta')
