// Trabalho feito por Allan Denner e Fransérgio de Paula

// Função para gerar um vetor aleatório de tamanho n
function gerarVetorAleatorio(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * tamanho));
  }
  return vetor;
}

// Função para gerar um vetor ordenado de tamanho n
function gerarVetorOrdenado(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(i);
  }
  return vetor;
}

// Função para gerar um vetor invertido de tamanho n
function gerarVetorInvertido(tamanho) {
  const vetor = [];
  for (let i = tamanho - 1; i >= 0; i--) {
    vetor.push(i);
  }
  return vetor;
}

// Implementação do Bubble Sort
function bubbleSort(vetor) {
  let n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        // Troca os elementos
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
  return vetor;
}

// Implementação do Selection Sort
function selectionSort(vetor) {
  let n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    let indiceMinimo = i;
    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[indiceMinimo]) {
        indiceMinimo = j;
      }
    }
    // Troca os elementos
    const temp = vetor[i];
    vetor[i] = vetor[indiceMinimo];
    vetor[indiceMinimo] = temp;
  }
  return vetor;
}

// Implementação do Insertion Sort
function insertionSort(vetor) {
  const n = vetor.length;
  for (let i = 1; i < n; i++) {
    const atual = vetor[i];
    let j = i - 1;
    while (j >= 0 && vetor[j] > atual) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = atual;
  }
  return vetor;
}

// Função para medir o tempo de execução de uma função de ordenação
function medirTempo(funcaoOrdenacao, vetor) {
  const tempoInicial = new Date().getTime();
  funcaoOrdenacao(vetor);
  const tempoFinal = new Date().getTime();
  return tempoFinal - tempoInicial;
}

function main(){
  // Tamanhos dos vetores
  const tamanhoVetor = 10000;

  // Geração dos vetores
  const vetorAleatorio = gerarVetorAleatorio(tamanhoVetor);
  const vetorOrdenado = gerarVetorOrdenado(tamanhoVetor);
  const vetorInvertido = gerarVetorInvertido(tamanhoVetor);

  // Medição de tempo e execução das ordenações
  const tempoBubbleSortAleatorio = medirTempo(bubbleSort, vetorAleatorio.slice());
  const tempoSelectionSortAleatorio = medirTempo(selectionSort, vetorAleatorio.slice());
  const tempoInsertionSortAleatorio = medirTempo(insertionSort, vetorAleatorio.slice());

  const tempoBubbleSortOrdenado = medirTempo(bubbleSort, vetorOrdenado.slice());
  const tempoSelectionSortOrdenado = medirTempo(selectionSort, vetorOrdenado.slice());
  const tempoInsertionSortOrdenado = medirTempo(insertionSort, vetorOrdenado.slice());

  const tempoBubbleSortInvertido = medirTempo(bubbleSort, vetorInvertido.slice());
  const tempoSelectionSortInvertido = medirTempo(selectionSort, vetorInvertido.slice());
  const tempoInsertionSortInvertido = medirTempo(insertionSort, vetorInvertido.slice());

  // Resultados
  console.log("Vetor Aleatório:");
  console.log("Bubble Sort:", tempoBubbleSortAleatorio, "ms");
  console.log("Seleção direta:", tempoSelectionSortAleatorio, "ms");
  console.log("Inserção direta:", tempoInsertionSortAleatorio, "ms");

  console.log("\nVetor Ordenado:");
  console.log("Bubble Sort:", tempoBubbleSortOrdenado, "ms");
  console.log("Seleção Direta:", tempoSelectionSortOrdenado, "ms");
  console.log("Inserção Direta:", tempoInsertionSortOrdenado, "ms");

  console.log("\nVetor Invertido:");
  console.log("Bubble Sort:", tempoBubbleSortInvertido, "ms");
  console.log("Seleção Direta:", tempoSelectionSortInvertido, "ms");
  console.log("Inserção direta:", tempoInsertionSortInvertido, "ms");

}
main()