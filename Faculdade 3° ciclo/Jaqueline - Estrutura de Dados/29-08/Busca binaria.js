// Função de teste personalizada
function testarBuscaBinaria() {
    const vetorOrdenado = [2, 4, 6, 8, 10, 12, 14];
    const elementoAlvo = 2;
  
    const indiceEncontrado = buscaBinariaRecursiva(vetorOrdenado, elementoAlvo);
  
    if (indiceEncontrado !== -1) {
      console.log(`Elemento ${elementoAlvo} encontrado no índice ${indiceEncontrado}.`);
    } else {
      console.log(`Elemento ${elementoAlvo} não encontrado no vetor.`);
    }
  }
  
  // Função de busca binária recursiva
  function buscaBinariaRecursiva(vetor, alvo, esquerda = 0, direita = vetor.length - 1) {
    if (esquerda > direita) {
      return -1; // Elemento não encontrado
    }
  
    const meio = (esquerda + direita) / 2 | 0; // Divisão inteira
  
    if (vetor[meio] === alvo) {
      return meio; // Elemento encontrado
    } else if (vetor[meio] < alvo) {
      return buscaBinariaRecursiva(vetor, alvo, meio + 1, direita); // Busca na metade direita
    } else {
      return buscaBinariaRecursiva(vetor, alvo, esquerda, meio - 1); // Busca na metade esquerda
    }
  }
  
  // Executar o teste
  testarBuscaBinaria();
  