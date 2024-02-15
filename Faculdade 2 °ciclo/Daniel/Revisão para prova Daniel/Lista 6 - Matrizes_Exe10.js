function exe10(){
    let matriz = []
    Cria_Matriz(matriz)
    Soma_Linha_4(matriz)
    Soma_coluna_2(matriz)
    Soma_Diagonal_principal(matriz)
    Soma_Diagonal_secundaria(matriz)
    Soma_todos_elementos(matriz)
}

function Cria_Matriz(matriz){
    for(let i=0;i<5;i++){
        matriz[i] = []
        for(let j=0;j<5;j++){
            matriz[i][j] = Number(prompt('Insira o elemento'))
        }
    }
}
function Soma_Linha_4(matriz){
    let soma = 0
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(i==3){
                soma+= matriz[i][j]
            }
        }
    }
    console.log(`A soma dos elementos da linha 4 ${soma}`)
}
function Soma_coluna_2(matriz){
    let soma = 0
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(j==1){
                soma+= matriz[i][j]
            }
        }
    }
    console.log(`A soma dos elementos da coluna 2 ${soma}`)
}
function Soma_Diagonal_principal(matriz){
    let soma = 0
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(i==j){
                soma+= matriz[i][j]
            }
        }
    }
    console.log(`A soma dos elementos da diagonal principal ${soma}`)
}
function Soma_Diagonal_secundaria(matriz){
    let soma = 0
    for(let i=0;i<matriz.length;i++){
        let j = matriz[i].length - i - 1
        soma += matriz[i][j]
    }
    console.log(`A soma dos elementos da diagonal secundaria ${soma}`)
}
function Soma_todos_elementos(matriz){
    let soma = 0
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            soma+= matriz[i][j]
        }
    }
    console.log(`A soma de todos os elementos ${soma}`)
}