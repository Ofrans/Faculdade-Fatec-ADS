function exe4(){
    let habitantes = []
    coleta(habitantes)
    Media_salario(habitantes)
    MenorMaior_idade(habitantes)
    Qtde_Mulheres(habitantes)
}

function coleta(habitantes){ 
    for(let i=0;i<2;i++){
        objColeta = {
            idade: Number(prompt('Informe a idade')),
            sexo: prompt('Informe o sexo\nM-Masculino\nF-Feminino').toUpperCase(),
            renda_familiar: Number(prompt('Informe a renda familiar')),
            numero_filhos: Number(prompt('Informe o numero de filhos'))
        } 
        habitantes.push(objColeta)
    }
}

function Media_salario(habitantes){
    let soma=0; media_sal = 0;contador = 0
    for(let i=0;i<2;i++){
        soma += habitantes[i].renda_familiar
        contador += 1
    }
    media_sal = soma/contador
    console.log(`A média de salario é ${media_sal}`)
}

function MenorMaior_idade(habitantes){
    let menor = habitantes[0].idade; maior = 0
    for(let i=0;i<2;i++){
        if(menor>habitantes[i].idade){
            menor = habitantes[i].idade
        }
        if(maior<habitantes[i].idade){
            maior = habitantes[i].idade
        }
    }
    console.log(`A menor idade é: ${menor}`)
    console.log(`A maior idade é ${maior}`)
}

function Qtde_Mulheres(habitantes){
    let contador = 0
    for(let i=0;i<2;i++){
        if(habitantes[i].sexo == 'F' && habitantes[i].renda_familiar <= 600 && habitantes[i].numero_filhos >= 2){
            contador += 1
        }
    }
    console.log(`A quantidade de mulheres com mais de 2 filhos e renda familiar <= R$ 600,00 é ${contador}`)
}

