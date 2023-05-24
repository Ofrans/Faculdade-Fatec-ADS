function exe2(){
    //não é preciso solicitar ou recuperar dados do usuário
    let ingresso = 5.0
    const despesa = 200
    let qtde = 120
    let lucro
    while (ingresso >= 1.0){
        lucro = (ingresso * qtde) - despesa
        document.getElementById("corpoTabela").innerHTML = document.getElementById("corpoTabela").innerHTML + ` <tr> <td> ${ingresso} <td> <td> ${qtde} <td> <td> ${despesa} <td> ${lucro} <td> <tr>`
        qtde = qtde + 26 //Ou qtde += 26
        ingresso = ingresso - 0.50 //Ou ingresso -= 0.50
    }
}
function exe3(){
    // estrutura de repetição para a entrada de dados
    // e calculo das faixas etárias
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0
    for(let conta = 1; conta <= 8; conta++){
        idade = prompt(`informe a idade ${conta}`)
        if ((idade >= 0 ) && (idade <= 15)){
            f1++
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if ((idade >= 61) && (idade <= 120)){
            f5++
        }
        else alert(`Idade invalida`)
    }
    //calcular o percentual da faixa 1
    let pf1 = f1 / 8 * 100
    //calcular o percentual da faixa 5
    let pf5 = f5 / 8 * 100
    //mostra o resultado ao usuário
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5}`)
}
function exe4(){
    let numero
    let tabuada
    let saida = ""
    numero = prompt(`informe o numero ${numero}`)
    for(let conta = 1; conta <= 10; conta++){   
        tabuada = numero * conta
        saida = saida + "\n" + `${numero} x ${conta} = ${tabuada}`
    }
    alert(saida)
}
function exe7(){
    //Entrada de dados  
    let idade, altura, peso,item1 = 0,item2 = 0, item3 = 0,qtdeItem2 = 0
    for (let conta = 1; conta <= 5; conta++){
        idade = Number(prompt(`Informe a idade ${conta}`))
        altura = Number(prompt(`Informe a altura ${conta}`))
        peso = Number(prompt(`Informe o peso ${conta}`))
        //calcula o item 1
        if (idade > 50){
            item1++ //item 1 + item 1
        }
        //calcula o item 2
        if ((idade >= 10) && (idade <= 20)){
            item2+= altura // item2 = item + altura
            qtdeItem2++ // qtdeItem2 = qtdeItem2 + 1
        }
        if (peso < 40){
            item3++
        }
    }
    // Mostra resultado
    document.getElementById("item1").innerHTML = "Qtde pessoas idade > 50 " + item1
    if(qtdeItem2 != 0){
        document.getElementById("item2").innerHTML = "Média de alturas com idade entre 10 e 20 " + (item2/qtdeItem2).toFixed(2)
    }
    document.getElementById("item3").innerHTML = "% peso inferior a 40 " + item3/5*100
}
function exe20(){
    let opcao
    do{ //faça
        prompt("Menu de opções \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair")
        switch(opcao){
            case 1: let nota1 = Number(prompt("Nro 1"))
                    let nota2 = Number(prompt("Nro 2"))
                    alert("Média aritmédica " + (nota1 + nota2) / 2)
                    break
            case 2: let num1p = Number(prompt("Nro 1"))
                    let peso1 = Number(prompt("Peso da Nota 1"))
                    let num2p = Number(prompt("Nro 2"))
                    let peso2 = Number(prompt("Peso da Nota 2"))
                    let num3p = Number(prompt("Nro 3"))
                    let peso13 = Number(prompt("Peso da Nota 3"))
                    alert("Média ponderada " + (nota1p * peso1) + (nota2 * peso2) + (nota3p * peso3) / (peso1 + peso2 + peso3))
                    break
            case 3: alert("Opção 3 selecionaada, programa será encerrado")
                    break
            default: alert('Opção invalida')
        }
    }
    while (opcao != 3) // enquanto
}
function exe21(){
    let opcao,totalVotos
    let qtde1 = 0, qtde2 = 0, qtde3 = 0, qtde4 = 0, qtdeNulo = 0, qtdeBranco = 0
    do{
        opcao = Number(prompt("Escolha a opção desejada: \n 1. Voto no candidato 1 \n 2. Voto no candidato 2 \n 3. Voto no candidato 3 \n 4. Voto no candidato 4 \n 5. Voto nulo \n 6. Voto em branco \n 0. Encerra a votação"))
        switch(opcao){
            case 1: qtde1++
                    break // não entra nos case abaixo
            case 2: qtde2++
                    break // não entra nos case abaixo
            case 3: qtde3++
                    break // não entra nos case abaixo
            case 4: qtde4++
                    break // não entra nos case abaixo
            case 5: qtdeNulo++
                    break // não entra nos case abaixo
            case 6: qtdeBranco++
                    break // não entra nos case abaixo
            case 0: alert("Votação encerrada, verifique o resultado")
                    break // não entra nos case abaixo
            default: alert("Opção inválida")
        }
    }
    while (opcao != 0)
    // Mostrar o resultado na página HTML
    document.getElementById("qtde1").innerHTML = qtde1
    document.getElementById("qtde2").innerHTML = qtde2
    document.getElementById("qtde3").innerHTML = qtde3
    document.getElementById("qtde4").innerHTML = qtde4
    document.getElementById("qtdeBranco").innerHTML = qtdeNulo
    document.getElementById("qtdeNulo").innerHTML = qtdeBranco
    // Calcula o total de votos
    totalVotos = qtde1 + qtde2 + qtde3 + qtde4 + qtdeBranco + qtdeNulo
    document.getElementById("percNulo").innerHTML = ((qtdeNulo / totalVotos) * 100).toFixed(2)
    document.getElementById("percBranco").innerHTML = ((qtdeBranco / totalVotos) * 100).toFixed(2)
    // Mostrar o total de votas
    document.getElementById("totalVotos").innerHTML = totalVotos
}