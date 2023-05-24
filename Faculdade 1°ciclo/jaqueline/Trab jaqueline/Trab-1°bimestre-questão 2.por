programa
{
	// trabalho feito por Frasergio de Paula
	funcao inicio()
	{
		real a,b,c

		escreva("Digite os 3 lados do seu retângulo :\n")
		leia(a,b,c)

		se (a >= b + c){
			escreva("Nenhum Triângulo é formado")
		}
			senao se (a*a == b*b + c*c){
				escreva("Triângulo Retângulo")
			}
				senao se (a*a > b*b + c*c){
					escreva("Triângulo Obtusângulo")
				}
					senao se (a*a < b*b + c*c){
						escreva("Triângulo Acutângulo")
					}
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 53; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */