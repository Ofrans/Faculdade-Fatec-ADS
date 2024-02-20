/** Função tradicional com 1 parâmetro e 1 linha de corpo contendo return */
function quadrado(n) {
    return n*n
}
console.log("Função tradicional: ", quadrado(12))

/**  Função equivalente, usando a sintaxe de arrow function
    --> não necessita de chaves
    --> não necessita de parênteses em torno do parâmetro
    --> não necessita da palavra-chave return
        Logo após o parâmetro
    --> a arrow function invocada pelo nome da constante que a recebe */
const quadrodaA = n => n*n
console.log("Arrow function: ", quadrodaA(12))

/** Função tradicional com mais de um parâmetro e uma única linha de corpo contendo return */
function calc(a, b, c){
    return a * b + c
}
console.log("Função tradicional: ", calc(10, 20, 30))

/**  Equivalente na sintaxe arrow function
    --> Quando o número de parênteses é != 1, os parênteses voltam a ser obrigatórios */
const calcA = (a, b, c) => a * b + c 
console.log("Arrow function: ", calcA(10, 20, 30))

/** Função tradicional sem parâmetros e uma única linha de corpo contendo return */
function msgErro(){
    return 'FATAL ERROR!!'
}
console.log("Função tradicional: ", msgErro())

/** Equivalente na sintaxe arrow function
    --> Com zero parâmetros, os parênteses vazios são obrigatórios */
const msgErroA= () => 'FATAL ERROR!!'
console.log("Arrow function: ", msgErroA())

/** Função tradicional com um parâmetro e mais de uma linha de corpo */
function fatorial(n) {
    let resultado = 1
    for(let i = n; i> 1; i--) resultado *= i
    return resultado
}
console.log("Funlção tradicional: ", fatorial(7))

/* Equivalente na sintaxe arrow funvtion
   ~> Não há economia de linhas no corpo da função
   ~> As chaves voltam a ser obrigatórias
*/
const fatorialA = n => {
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= i
    return resultado
}
console.log('Arrol function:', fatorialA)