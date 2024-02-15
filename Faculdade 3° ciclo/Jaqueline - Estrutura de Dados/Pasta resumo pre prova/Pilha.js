//A operação Clear em uma pilha é responsável por remover todos os elementos da pilha, deixando-a vazia. 
// Podemos implementar isso utilizando as operações Empty e Pop da seguinte maneira em JavaScript:

let pilha = [];
let x;

// Obter um número do usuário
x = 7
pilha.push(x)
pilha.push(1)
pilha.push(2)

// Exibir a pilha
console.log("Pilha: " + pilha);

// Remover o elemento do topo
x = pilha.pop();

// Exibir o elemento removido e a pilha atualizada
console.log("Elemento removido: " + x);
console.log("Pilha atualizada: " + pilha);
