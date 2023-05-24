function calcularExe1(){
    // recupera dados do formulário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // processamento
    let subtracao = nro1 - nro2
    // saída dos dados
    document.getElementById("subtracao").innerHTML = "O resultado da sua subtração é " + subtracao
}
function calcularExe2(){
      // recupera dados do formulário
      let nro1 = Number(document.getElementById("nro1").value)
      let nro2 = Number(document.getElementById("nro2").value)
      // processamento
      let multiplicacao = nro1 * nro2
      // saída dos dados
      document.getElementById("multiplicacao").innerHTML = "O resultado da sua multiplicação é " + multiplicacao
}
function calcularExe3(){
    // recupera dados do formulário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // processamento
    let divisao = nro1 / nro2
    // saída dos dados
    document.getElementById("divisao").innerHTML = "O resultado da sua divisao é " + divisao
}
function calcularExe4(){
    // recupera dados do formulário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // processamento
    let mediaponderada = ((nota1 * 2) + (nota2 * 3)) / 5
    // saída dos dados
    document.getElementById("mediaponderada").innerHTML = "Sua média é " + mediaponderada
}
function calcularExe5(){
    // recupera dados do formulário
    let produto = Number(document.getElementById("produto").value)
    // processamento
    let novopreco = produto - (produto * (10/100))
    // saída dos dados
    document.getElementById("novopreco").innerHTML = "O novo preço é " + novopreco
}
function calcularExe6(){
    // recupera dados do formulário
    let salbase = Number(document.getElementById("salbase").value)
    let vendas = Number(document.getElementById("vendas").value)
    // processamento
    let comissao = vendas * 0.04
    let salfinal = comissao + salbase
    // saída dos dados
    document.getElementById("comissao").innerHTML = "A sua comissão foi de : " + comissao
    document.getElementById("salfinal").innerHTML = "O seu salário final é " + salfinal
}
function calcularExe7(){
    // recupera o peso
    let peso = Number(document.getElementById("peso").value)
    //calcular quando engorda
    let engorda = peso + peso*15/100
    let emagrece = peso - peso*20/100
    // devolver o resultado para o html
    document.getElementById("engorda").innerHTML = "Quanto engorda " + engorda
    document.getElementById("emagrece").innerHTML= "o resultado se você emagrecer é " + emagrece
}
function calcularExe8(){
    // recupera o peso
    let pesokg = Number(document.getElementById("pesokg").value)
    //calcular quando engorda
    let pesog = pesokg * 1000
    // devolver o resultado para o html
    document.getElementById("pesog").innerHTML= "O seu peso em gramas é " + pesog
}
function calcularExe9(){
    // recupera o peso
    let area_menor = Number(document.getElementById("area_menor").value)
    let area_maior = Number(document.getElementById("area_maior").value)
    let altura = Number(document.getElementById("altura").value)
    //calcular quando engorda
    let area_trapezio = (area_maior + area_menor) * altura/2
    // devolver o resultado para o html
    document.getElementById("area_trapezio").innerHTML= "A área do trapézio é " + area_trapezio
}
function calcularExe10(){
    //Recupera o dado do lado
    let lado1 = Number(document.getElementById("lado1").value)
    let lado2 = Number(document.getElementById("lado2").value)
    //calcular a área
    let area = lado1 * lado2
    //devolver o resultado para o html
    document.getElementById("area").innerHTML = "A área desse quadrado é " + area
}