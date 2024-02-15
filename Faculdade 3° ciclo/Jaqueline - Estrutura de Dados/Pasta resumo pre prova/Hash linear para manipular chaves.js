// Tamanho da tabela hash
const tamanhoTabela = 7;

// Inicializa a tabela hash como um vetor vazio
const tabelaHash = Array(tamanhoTabela).fill(null);

// Função de hashing simples (pode ser melhorada)
function hashChave(chave) {
  let hash = 0;
  for (let i = 0; i < chave.length; i++) {
    hash += chave.charCodeAt(i);
  }
  return hash % tamanhoTabela;
}

// Função para inserir uma chave na tabela hash
function inserirChave(chave) {
  const indice = hashChave(chave);
  
  // Verifica se a posição na tabela está vazia
  if (tabelaHash[indice] === null) {
    tabelaHash[indice] = chave;
    console.log(`Chave "${chave}" inserida na posição ${indice}`);
  } else {
    // Tratamento simples de colisão (hashing linear)
    let novoindice = (indice + 1) % tamanhoTabela;
    while (tabelaHash[novoindice] !== null && novoindice !== indice) {
      novoindice = (novoindice + 1) % tamanhoTabela;
    }
    if (novoindice === indice) {
      console.log(`Tabela cheia. Não foi possível inserir a chave "${chave}".`);
    } else {
      tabelaHash[novoindice] = chave;
      console.log(`Chave "${chave}" inserida na posição ${novoindice}`);
    }
  }
}

// Função para buscar uma chave na tabela hash
function buscarChave(chave) {
  const indice = hashChave(chave);
  
  if (tabelaHash[indice] === chave) {
    console.log(`Chave "${chave}" encontrada na posição ${indice}`);
  } else {
    // Procura a chave linearmente
    let novoindice = (indice + 1) % tamanhoTabela;
    while (tabelaHash[novoindice] !== chave && novoindice !== indice) {
      novoindice = (novoindice + 1) % tamanhoTabela;
    }
    if (novoindice === indice) {
      console.log(`Chave "${chave}" não encontrada na tabela.`);
    } else {
      console.log(`Chave "${chave}" encontrada na posição ${novoindice}`);
    }
  }
}

// Exemplos de uso
inserirChave("S");
inserirChave("I");
inserirChave("T");
buscarChave("E");
buscarChave("D");
