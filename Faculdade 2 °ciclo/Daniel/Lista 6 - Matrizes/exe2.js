function exe2(){
    let matriz = []
    // entrada de dados
    for (let i=0;i<2;i++){
        mat[i] = []
        for (let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe elemtno da posição ${i} x ${j}`))
        }
    }
    // calcular a quantidade de número entre 12 e 20 por linha
    let vet = []
    let par = 0
    let soma_par = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            vet[i] = 0
            if((mat[i][j] >= 12) && (mat[i][j] <= 20)){
                vet[i]++
            }
            if(mat[i][j] % 2 == 0){
                par++
                soma_par+= mat[i][j]
            }
        }
    }
    // mostra o reusultado 
    alert(vet)
    alert(`A média de elementos de pares ${soma_par/par}`)
}
