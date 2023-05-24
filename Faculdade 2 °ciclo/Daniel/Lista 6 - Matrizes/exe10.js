function diagonalPrincipal(matriz){
    for(let i=0;i<matriz.lenght;i++){
        let soma = 0
        for(let j=0;j<matriz[i].lenght;j++){
            if(i == j){
                soma+= matriz[i][j]
            }
        }
    }
    console.log(`Soma da Diagonal Principal é ${soma}`)
}
function exe10(){
    let matriz = []
    preencheMatriz(matriz,5,5)
    diagonalPrincipal(matriz)
}