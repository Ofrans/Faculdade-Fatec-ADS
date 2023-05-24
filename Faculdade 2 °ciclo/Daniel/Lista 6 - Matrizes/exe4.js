function exe4(){
    let mat = [] // matriz de notaa
    let vet = [] //veotr de nomes
    // entrada de dados
    for (let i=0;i<15;i++){
        mat[i] = [] // cria um valor dentro da matriz
        vet[i] = prompt(`Informe o nome do ${i+1}}° aluno`)
        for (let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe a nota ${i+1} do aluno ${vet[i]}`))
        }
    }
    let somaMedia = 0
    for(let i=0;i<15;i++){ // para cada aluno
        let soma = 0
        for (let j=0;j<5;j++){
            soma += mat[i][j]
        }
        let media = soma / mat[i].length
        somaMedia += media
        if (media >= 6){
            situacao = "Aprovado"
        }
        else if(media >= 3){
            situacao = "Exame"
        }
        else situacao = "reprovado"
        alert(`Aluno ${vet[i]} com média ${média} foi ${situacao}`)
    }
    alert(`Média da turma ${somaMedia/vet.length}`)
}