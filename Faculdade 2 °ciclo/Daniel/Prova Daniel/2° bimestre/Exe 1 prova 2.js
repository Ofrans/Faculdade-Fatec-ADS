function Prova2Exe1(){
    let opcao
    let piloto = []; let contas = [];
    do{
        opcao = Number(prompt(`Digite \n 1. Cadastrar Piloto \n 2. Cadastrar Carro \n 3. Valor total em Carro\n 4. CPF da pessoa que tem o carro mais caro \n 5. Sair`))
        switch(opcao){
            case 1: cadastraPiloto(piloto)
                    break
            case 2: cadastraCarro(contas,piloto)
                    break
            case 3: valor_total(contas,piloto)
                    break
            case 4: mais_caro(contas,piloto)
                    break
            }   
    }
    while (opcao != 5)
}
function cadastraPiloto(piloto){
    for(let i=0;i<10;i++){
            let objPiloto = {
                rg: prompt('RG do Piloto'), // código do cliente é incremental
                cpf: prompt('Cpf do Piloto'),
                nome: prompt('Nome do Piloto'),
            }
        piloto.push(objPiloto)
    }
}
function cadastraCarro(contas, piloto) {
  let objConta = {
    numero: contas.length,
    nroRG: Number(prompt('Informe o RG do piloto')),
  }

  // verifica se existe
  let achou = false;
  for (let i = 0; i < piloto.length; i++) {
    if (objConta.nroRG == piloto[i].rg) {
      for (let j = 0; j < 10; j++) {
        let objCarros = {
          codigo: Number(prompt('Informe código do Carro')),
          marca: prompt('Informe a marca do carro'),
          modelo: prompt('Informe o modelo do Carro'),
          qtd_cavalo: Number(prompt('Informe a quantidade de cavalos')),
          cpf: Number(prompt('Informe CPF do dono')),
          valor: Number(prompt('Informe o valor do Carro')),
        }
        contas.push(objCarros)
      }
      achou = true; // encontrou
    }
  }
  if (!achou) { // não encontrou o cliente
    cadastraPiloto(piloto); // Correção aqui: chamando a função cadastraPiloto em vez de cadastraCliente
  }
}
function valor_total(contas,piloto){
    let soma = 0
    let rg = prompt('Informe seu RG')
    let achou = false
    for(let i=0;i<piloto.length;i++){
        if (rg == piloto[i].rg){
            for(let i=0;i<piloto.length; i++){
                soma += contas[i].valor
            }
            console.log(`O valor total em Carros de ${piloto[i].nome} é ${soma}`)
            achou = true // encontrou
        }
    }
    if (!achou){ // não encontrou o cliente
        console.log('Não foi possível achar seu RG')
    }
}
function mais_caro(contas,piloto){
    let maior = 0;
    for(let i=0;i<contas.length; i++){
        if(maior<contas[i].valor){
            maior = contas[i].cpf
        }
    }
    console.log(`o CPF da pessoa que tem o Carro mais caro é ${maior}`)
}