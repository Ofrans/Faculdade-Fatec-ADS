function exemplo1() {
    let valores = 0
    let soma = 0
    for(let conta=1;conta<=5;conta++){
        // desvantagem: perco os valores anteriores.
        valores = Number(prompt(`Informe o valor ${conta}`))
        soma += valores //soma = soma + valores
    }
    console.log(`A média dos 5 valores é ${somaa/5}`)
}
function exemplo2(){
    let valor1 = 0, valor2 = 0, valor3 = 0, valor4 = 0, valor5 = 0
    let soma = 0
    for(let conta=1;conta<=5;conta++){
        // desvantagem: Imaginemos que serão 30 valores, deverão ser criados 30 variáveis.
        let aux = Number(prompt(`Informe o valor ${conta}`))
        switch(conta){
            case 1: valor1 = aux; soma += valor1; break  //soma = soma + valor1
            case 2: valor2 = aux; soma += valor2; break  //soma = soma + valor2
            case 3: valor3 = aux; soma += valor3; break  //soma = soma + valor3
            case 4: valor4 = aux; soma += valor4; break  //soma = soma + valor4
            case 5: valor5 = aux; soma += valor5; break  //soma = soma + valor5
        }
    }
    console.log(`A média dos 5 valores é ${somaa/5}`)
}
function exemplo3(){
    let valores = [] // declaração de vetor
    // entrada de dados
    for(let i=0;i<5;i++){
        valores[i] = Number(prompt(`Informe o valor ${i+1}`))
    }
    // processamento de dados
    let soma = 0
    for(let i=0;i<5;i++){
        soma += valores[i]
    }
    console.log(`A média dos valores é ${soma/5}`)
}
function exe1(){
    let num = []
    let pares = []
    let impares = []
    let soma_pares = 0, soma_impares = 0
    for(let conta = 0; conta <6;conta++){
        num[conta] = Number(prompt(`Informe o numero ${conta+1}`))
        if (num[conta] % 2 == 0){
            pares[conta] = num[conta]
            soma_pares += 1
        }
        else{
            impares[conta] = num[conta]
            soma_impares += 1
        }
    }
    console.log(`Os numeros pares: ${pares[0]} ${pares[1]} ${pares[2]} ${pares[3]} ${pares[4]} ${pares[5]} `)
    console.log(`Os numeros impares: ${impares[0]} ${impares[1]} ${impares[2]} ${impares[3]} ${impares[4]} ${impares[5]} `)
    console.log(`A quantidade de numeros pares ${soma_pares}`)
    console.log(`A quantidade de numero impares ${soma_impares}`)
}
function exe1_segundaforma(){
    let vetor = []
    let pares = []
    let impares = []
    for(let i = 0; i <6;i++){
        num[i] = Number(prompt(`Informe o numero ${i+1}`))
        if (num[i] % 2 == 0){
            pares.push(vetor[i]) // insere no vetor de pares
        }
        else{
            impares.push(vetor[i]) // insere no vetor de impares
        }
    }
    console.log(`A quantidade de numeros pares ${pares.length} - ${pares}`)
    console.log(`A quantidade de numero impares ${impares.length} - ${impares}`)
}
function exe2(){
    let num = [] 
    let multi_3 = []
    let multi_2 = []
    let nem = []
    let multi_2_3 = []

    for(let i = 0; i<7;i++){
        num[i]= Number(prompt(`Informe o numero ${i+1}`))
        if((num[i] % 2 == 0) && (num[i] % 3 != 0)){
            multi_2[i] = num[i]
        }
        else if((num[i] % 2 != 0) && (num[i] % 3 == 0)){
            multi_3[i] = num[i]
        }
        else if((num[i] % 2 == 0) && (num[i] % 3 == 0)){
            multi_2_3[i]= num[i]
        }
        else if((num[i] % 2 != 0) && (num[i] % 3 != 0)) {
            nem[i] = num[1]
        }
    }
    console.log(`Multiplos de 3: ${multi_3}`)
    console.log(`Multiplos de 2: ${multi_2}`)
    console.log(`Multiplos de 2 e de 3: ${multi_2_3}`)
    console.log(`Multiplos nem 2 e nem de 3: ${nem}`)
}
function exe3(){
    // entrada de dados
    let codigos = []
    let estoque = []
    for(let i=0; i<10; i++){
        codigos.push(prompt(`Informe o código do produto ${i+1}`)) // push = codigos[i] = num[i] 
        estoque.push(prompt(`Informe a qtde do produto ${i+1}`)) // push = estoque[i] = num[i]
    }
    let cliente = 0
    cliente = Number(prompt(`Informe o código do cliente`))
    do{
        let codigo = prompt(`Informe o código do produto para compra`)
        // percorrer o vetor códigos para ver se existe
        for(let i=0;i<10;i++){
            // achou o produto
            let qtde = Number(prompt(`Informe a quantidade da compra`))
            if (qtde <= estoque[i]){
                // qtde suficiente
                estoque[i] = estoque[1] - qtde // atualizei
                alert('Compra realizada com sucesso')
            }
            else{
                alert(`Estoque insuficiente, permitido ${estoque[1]}`)
            }
            break // sao do for sem incrementar o i - já encontrou o produto
        }
        if (i == 10){ // valor que saiu do for
            alert('Produto não existe')
        }
        cliente = Number(prompt(`Informe o código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
}
function exe8(){
    
}