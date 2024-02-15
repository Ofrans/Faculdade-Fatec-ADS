function calcularModa(vetor) {
    let frequencia = {};  // Objeto para armazenar a frequência de cada número
  
    // Contagem da frequência de cada número no vetor
    for (let num of vetor) {
      frequencia[num] = (frequencia[num] || 0) + 1;
      // Incrementa a contagem se o número já existe no objeto frequencia,
      // caso contrário, define a contagem como 1.
    }
  
    let moda = null;  // Variável para armazenar a moda
    let maxFrequencia = 0;  // Variável para armazenar a frequência máxima
  
    // Encontra a moda e a frequência máxima
    for (let num in frequencia) {
      if (frequencia[num] > maxFrequencia) {
        moda = num;
        maxFrequencia = frequencia[num];
        // Atualiza a moda e a frequência máxima se encontrarmos uma frequência maior
      } else if (frequencia[num] === maxFrequencia) {
        moda = null;
        // Se encontrarmos números com a mesma frequência máxima, a moda não existe
      }
    }
  
    return moda;  // Retorna a moda (ou null se não houver moda)
  }
  
  // Exemplo de uso
  let vetor = [4, 7, 2, 8, 4, 9, 7, 2, 4, 7];
  let resultado = calcularModa(vetor);
  
  if (resultado === null) {
    console.log("Não existe uma moda.");
  } else {
    console.log(`A moda é: ${resultado}`);
  }
  