programa
{
	
	funcao inicio()
	{
		inteiro vet[30],vet2[30],cont

		para (cont = 0; cont <30; cont++){
			escreva("Digite um numero: ")
			leia(vet[cont])
			se (vet[cont] % 2 == 0){
				vet2[cont] = vet[cont] * 2
			}
			senao{
				vet2[cont] = vet[cont] * 3
			}
		}
		escreva("As posições do vetor 1 são: ")
		para (cont = 0; cont <30; cont++){
			escreva(vet[cont], " - ")
		}
		escreva("\nAs posições do vetor 2 são: ")
		para (cont = 0; cont < 30; cont++){
			escreva(vet2[cont], " - ")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 449; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */