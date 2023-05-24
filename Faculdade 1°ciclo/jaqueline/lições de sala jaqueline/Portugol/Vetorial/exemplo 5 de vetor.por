programa
{
	
	funcao inicio()
	{
		inteiro vetor[50], cont
		para (cont = 0; cont < 100; cont++){
			escreva("Digite  ", cont+1, " °: ")
			leia(vetor[cont])
			se (vetor[cont] != 0 ou vetor[cont] != 1 ){
				escreva("Digite somente 0 ou 1 ANIMAL\n")
				escreva("Digite  ", cont+1, " °: ")
				leia(vetor[cont])
				se ( vetor[cont] % 2 == 1){
					vetor[cont] = 1
				}
				se( vetor[cont] % 2 == 0){
					vetor[cont] = 0
				}	
				escreva(vetor[cont],"\n")
			}
		}	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 460; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = vetor, matriz, funcao;
 */