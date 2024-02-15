function gerarArrayAleatorio(tamanho) {
    const array = [];
    for (let i = 0; i < tamanho; i++) {
      array.push(Math.floor(Math.random() * 1000)); // Gere números aleatórios de 0 a 999
    }
    return array;
  }
  
  function ordenacaoBolha(arr) {
    const n = arr.length;
    let trocado;
    do {
      trocado = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          trocado = true;
        }
      }
    } while (trocado);
    return arr;
  }
  
  function ordenacaoSelecao(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let indiceMinimo = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[indiceMinimo]) {
          indiceMinimo = j;
        }
      }
      if (indiceMinimo !== i) {
        const temp = arr[i];
        arr[i] = arr[indiceMinimo];
        arr[indiceMinimo] = temp;
      }
    }
    return arr;
  }
  
  function ordenacaoInsercao(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const atual = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > atual) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = atual;
    }
    return arr;
  }
  
  function ordenacaoQuickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivo = arr[0];
    const esquerda = [];
    const direita = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivo) {
        esquerda.push(arr[i]);
      } else {
        direita.push(arr[i]);
      }
    }
  
    return [...ordenacaoQuickSort(esquerda), pivo, ...ordenacaoQuickSort(direita)];
  }
  
  function medirTempo(funcaoOrdenacao, arr) {
    const inicio = performance.now();
    funcaoOrdenacao(arr);
    const fim = performance.now();
    return fim - inicio;
  }
  
  const tamanhoArray = 10000; // Tamanho do array de números aleatórios
  const arrayAleatorio = gerarArrayAleatorio(tamanhoArray);
  
  console.log("Medindo o tempo para ordenar um array de " + tamanhoArray + " números:");
  
  console.log("Ordenação Bolha: " + medirTempo(ordenacaoBolha, [...arrayAleatorio]) + " milissegundos");
  console.log("Ordenação Seleção: " + medirTempo(ordenacaoSelecao, [...arrayAleatorio]) + " milissegundos");
  console.log("Ordenação Inserção: " + medirTempo(ordenacaoInsercao, [...arrayAleatorio]) + " milissegundos");
  console.log("Ordenação QuickSort: " + medirTempo(ordenacaoQuickSort, [...arrayAleatorio]) + " milissegundos");
  