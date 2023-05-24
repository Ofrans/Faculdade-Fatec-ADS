function exe1(){
    let matriz = []
    // entrada de dados
    for (let i=0;i<3;i++){
        mat[i] = []
        for (let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe elemtno da posição ${i} x ${j}`))
        }
    }
    // calcular a quantidade de número entre 15 e 20
    let qtde = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if((mat[i][j] >= 15) && (mat[i][j] <= 20)){
                qtde++
            }
        }
    }
    // mostra o reusultado 
    alert(`A qtde de número entre 15 e 20 é ${qtde}`)
}
