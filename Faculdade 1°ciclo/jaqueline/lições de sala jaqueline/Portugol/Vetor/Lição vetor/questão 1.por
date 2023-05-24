programa
{
	
	funcao inicio()
	{
		inteiro vetor[20], cont, menor, maior

		escreva("Digite um numero ")
		leia(vetor[1])
		maior = vetor[1]
		menor = vetor[1]
			
		para(cont = 2; cont<=20; cont++){
			escreva("Digite um numero ")
			leia(vetor[cont])
			se (vetor[cont] > maior){
				maior = vetor[cont]
			}
			senao se  (vetor[cont] < menor){
				menor = vetor[cont]
			}
		}
		escreva("O numero maior é: ",maior)
		escreva("\nO numero menor é: ",menor)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 194; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */