
function coleta(habitantes){
    for(let i=0;i<2;i++){
        let objDados = {
            idade: Number(prompt('Informe sua idade')),
            sexo: prompt('Informe seu sexo\n\n M - Masculino\n F - Feminino').toUpperCase(),
            renda: Number(prompt('Informe sua renda familar em reais')),
            num_filhos: Number(prompt('Informe o número de filhos'))

        }
        habitantes.push(objDados)
    }  
}
function mediaSalario(habitantes){
    let soma = 0
    for(let i=0;i<2;i++){
        soma += habitantes[i].renda
    }
    return soma/3
}
function menorMaiorIdade(habitantes){
    let menorIdade = habitantes[0].idade
    let maiorIdade = habitantes[0].idade
    for(let i=0;i<2;i++){
        if(habitantes[i].idade < menorIdade){
            menorIdade = habitantes[i].idade
        }  
        if(habitantes[i].idade > maiorIdade){
            maiorIdade = habitantes[i].idade
        }
    }
    console.log(`A menor idade é ${menorIdade} e a maior idade é ${maiorIdade}`)
}
function mulheres(habitantes){
    let qtde = 0
    for(let i=0; i<2; i++){
        if((habitantes[i].sexo = 'F') && (habitantes[i].renda < 600) && (habitantes[i].filhos > 2)){
            qtde++
        }
    }
    // console.log(`A quantidade é ${qtde}`) é uma forma
    return qtde
}
function exe4(){
    let habitantes = []
    coleta(habitantes)
    let media = mediaSalario(habitantes)
    console.log(`A média da renda é ${media}`) // essa era outra forma de fazer: mediaSalario(habitantes) 
    menorMaiorIdade(habitantes)
    console.log(`A quantidade é ${qtde}`)
}
// a forma mais recomendada para fazer passagem de parâmentro é pelo return