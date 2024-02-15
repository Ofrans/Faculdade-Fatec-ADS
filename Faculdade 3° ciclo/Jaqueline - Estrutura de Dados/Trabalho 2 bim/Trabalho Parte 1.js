function verificaExpressao(expression) {
    const colchetes = {
      '(': ')',   // Mapeia o parêntese de abertura '(' para o parêntese de fechamento ')'.
      '[': ']',   // Mapeia o colchete de abertura '[' para o colchete de fechamento ']'.
      '{': '}'    // Mapeia a chave de abertura '{' para a chave de fechamento '}'.
    };

  
    const pilha = []; 


    for (let caracteres of expression) {  // este "of" dentro do for serve para substituir o contador
    //for (let i = 0; i < expression.length; i++) {
      if (colchetes[caracteres]) {
        // Se o caractere é um parêntese de abertura, adiciona à pilha
        pilha.push(caracteres);
      } else if (colchetes[pilha.pop()] !== caracteres) {
        // Se o caractere é um parêntese de fechamento, verifica se corresponde ao topo da pilha
        return false;
      }
    }
    // Após iterar toda a expressão, a pilha deve estar vazia para ser válida
    return pilha.length === 0; //Quando você usa === para comparar dois valores
  }
  
function main(){
    // Exemplos de uso:
  const expressao1 = "{[()()]}"; // Expressão válida
  const expressao2 = "{[(])}";   // Expressão inválida
  
  console.log("Expressão 1 = " + verificaExpressao(expressao1)); // true
  console.log("Expressão 2 = " + verificaExpressao(expressao2)); // false
}
main()