var fila = [1,2,3]
let pilha = [];
let topo;
console.log("Fila antes de apagar: " + fila)

for(let i=0;i<fila.length;i++){
    pilha[i] = fila[i]
}

// Exibir a pilha
console.log("Pilha: " + pilha);

// pegar o topo
for(let i=0;i<pilha.length;i++){
    topo = pilha[i]
}

// Exibir o elemento removido e a pilha atualizada
console.log("Elemento do topo: " + topo);


