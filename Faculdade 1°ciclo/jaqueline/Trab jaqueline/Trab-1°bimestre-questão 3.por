programa
{
	// iago e fransergio fizeram juntos	
	funcao inicio()
	{
		inteiro cont, numero, div_por_3,soma,maior
		
		soma = 0
		div_por_3 = 0
		maior = 0
		
		faca{
			escreva("Digite um numero (obs: Digitar  0  para o programa)\n")
			leia(numero)
 				
 				se (numero >= 10 e numero <= 50){
 					soma = soma + numero 
 				}			
				se (numero % 3 == 0 e numero != 0){
					div_por_3 = div_por_3 + 1
				}
				se (numero > maior ){
					maior = numero				
				}
			}	
		enquanto (numero != 0)
		escreva("\nA soma de todos os numero entre 10 e 50 foi de: ", soma)
		escreva("\nA quantidade de numeros divisiveis por 3 são: ",div_por_3 )
		escreva("\nO maior numero foi : ",maior)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 47; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */