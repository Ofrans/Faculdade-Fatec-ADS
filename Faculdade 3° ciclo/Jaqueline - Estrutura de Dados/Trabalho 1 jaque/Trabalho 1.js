// Função para gerar um vetor aleatório de tamanho n
function gerarVetorAleatorio(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * tamanho));
  }
  return vetor;
}

// Função para gerar um vetor crescente de tamanho n
function gerarVetorCrescente(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(i);
  }
  return vetor;
}

// Função para gerar um vetor decrescente de tamanho n
function gerarVetorDecrescente(tamanho) {
  let vetor = [];
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
  const iteracoes = 10; // Número de vezes que a ordenação será repetida
  let tempoTotal = 0;

  for (let i = 0; i < iteracoes; i++) {
    const vetorCopia = vetor.slice(); // Copie o vetor para evitar alterações permanentes
    const tempoInicial = performance.now();
    funcaoOrdenacao(vetorCopia);
    const tempoFinal = performance.now();
    const tempoExecucao = tempoFinal - tempoInicial;
    tempoTotal += tempoExecucao;
  }

  const tempoMedio = tempoTotal / iteracoes;
  return tempoMedio;
}

// Implementação do Quicksort
function quickSort(vetor) {
  if (vetor.length <= 1) {
    return vetor; // Vetor de tamanho 0 ou 1 já está ordenado
  }

  const pivo = vetor[Math.floor(Math.random() * vetor.length)]; // Escolhe um elemento aleatório como pivô
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const elemento of vetor) {
    if (elemento < pivo) {
      menores.push(elemento);
    } else if (elemento === pivo) {
      iguais.push(elemento);
    } else {
      maiores.push(elemento);
    }
  }

  return [...quickSort(menores), ...iguais, ...quickSort(maiores)];
}

function main() {
  // Tamanhos dos vetores
  const tamanhoVetor = 100000; // Aqui você define o tamanho do vetor

  // Geração dos vetores
  const vetorCrescente = gerarVetorCrescente(tamanhoVetor);
  const vetorDecrescente = gerarVetorDecrescente(tamanhoVetor);
  const vetorAleatorio = gerarVetorAleatorio(tamanhoVetor);
;

  // Medição de tempo e execução das ordenações
  const tempoBubbleSortAleatorio = medirTempo(bubbleSort, vetorAleatorio.slice());
  const tempoSelectionSortAleatorio = medirTempo(selectionSort, vetorAleatorio.slice());
  const tempoInsertionSortAleatorio = medirTempo(insertionSort, vetorAleatorio.slice());
  const tempoQuickSortAleatorio = medirTempo(quickSort, vetorAleatorio.slice());

  const tempoBubbleSortCrescente = medirTempo(bubbleSort, vetorCrescente.slice());
  const tempoSelectionSortCrescente = medirTempo(selectionSort, vetorCrescente.slice());
  const tempoInsertionSortCrescente = medirTempo(insertionSort, vetorCrescente.slice());
  const tempoQuickSortCrescente = medirTempo(quickSort, vetorCrescente.slice());

  const tempoBubbleSortDecrescente = medirTempo(bubbleSort, vetorDecrescente.slice());
  const tempoSelectionSortDecrescente = medirTempo(selectionSort, vetorDecrescente.slice());
  const tempoInsertionSortDecrescente = medirTempo(insertionSort, vetorDecrescente.slice());
  const tempoQuickSortDecrescente = medirTempo(quickSort, vetorDecrescente.slice());

  // Resultados

  console.log(`Vetor ${tamanhoVetor}`); 
  console.log("\nVetor Aleatório:");
  console.log("Bubble Sort:", tempoBubbleSortAleatorio, "ms");
  console.log("Selection Sort:", tempoSelectionSortAleatorio, "ms");
  console.log("Insertion Sort:", tempoInsertionSortAleatorio, "ms");
  console.log("Quick Sort:", tempoQuickSortAleatorio, "ms");
  // Vetor Ordenado
  console.log("\nVetor Crescente:");
  console.log("Bubble Sort:", tempoBubbleSortCrescente, "ms");
  console.log("Selection Sort:", tempoSelectionSortCrescente, "ms");
  console.log("Insertion Sort:", tempoInsertionSortCrescente, "ms");
  console.log("Quick Sort:", tempoQuickSortCrescente, "ms");
  // Vetor Invertido
  console.log("\nVetor Decrescente:");
  console.log("Bubble Sort:", tempoBubbleSortDecrescente, "ms");
  console.log("Selection Sort:", tempoSelectionSortDecrescente, "ms");
  console.log("Insertion Sort:", tempoInsertionSortDecrescente, "ms");
  console.log("Quick Sort:", tempoQuickSortDecrescente, "ms");
}
main();
