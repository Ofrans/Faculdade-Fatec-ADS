function preencheMatriz(matriz,linhas,colunas){
    for(let i=0;i<linhas;i++){
        matriz[i] = []
        for(let j=0;j<colunas;j++){
            matriz[i][j] = parseInt(Math.random() *20)
        }
    }
}
function mostraMatriz(matriz){
    let saida
    for(let i=0;i<matriz.length;i++){
        saida = ''
        for(let j=0;j<matriz[i].length;j++){
            saida = saida + " " + matriz[i][j]
        }
        console.log(saida)
    }
    console.log('\n')
}
function somaLinhaColuna(M,N){
    let O = []
    for(let i=0;i<linhas;i++){
        O[i] = []
        for(let j=0;j<colunas;j++){
           O[i][j] = M[i][j] + N[j][i]
        }
    }
    mostraMatriz(O)
}
function exe7(){
    let M = []
    let O = []
    preencheMatriz(M,4,6)
    preencheMatriz(O,6,4)
    mostraMatriz(M)
    mostraMatriz(N)
    somaLinhaColuna(M,N)
}
