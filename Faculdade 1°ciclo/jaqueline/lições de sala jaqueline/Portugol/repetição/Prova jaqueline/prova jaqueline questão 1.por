programa
{
	//programa feito por fransergio de paula morato filho//
	funcao inicio()
	{
	 	inteiro numero,negativo, soma,numeros_pares,soma_pares
	 	real media_pares 

		soma = 0
		negativo = 0
		numeros_pares = 0
		media_pares = 0
		soma_pares = 0
		
			faca{
					
	 			escreva("Digite um numero inteiro:  ")
	 			escreva("\nObs: digitar '0' fechará o programa  ")
	 			leia(numero)
				se(numero > 50){
					soma = soma + numero
				}
				se(numero < 0){
					negativo = negativo + 1
				}
				se(numero % 2 == 0){
					numeros_pares = numeros_pares + 1
					soma_pares = soma_pares + numero
					media_pares = soma_pares / numeros_pares			
				}
				escreva("\n\nA soma do numeros maiores que 50 é:  ",soma)
				escreva("\nA quantidade de números negativos é:  ",negativo)
			     escreva("\nA média dos numeros pares é:  ",media_pares,"\n\n")				
	 	}
	 	enquanto (numero != 0)
	 	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 511; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */