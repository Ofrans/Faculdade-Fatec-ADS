function calcularExe1(){
    // entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    //calculo
    let media = (nota1+nota2+nota3+nota4)/4
    //condição
    if (media >= 7){
        document.getElementById("resultado").innerHTML = "Aprovado"
    }
    else{
        document.getElementById("resultado").innerHTML = "Reprovado"
    }
}