programa
{
	
	funcao inicio()
	{
		inteiro vet[30],cont

		para (cont = 0; cont <30; cont++){
			escreva("Digite um numero: ")
			leia(vet[cont])
		}
		escreva("Os valores do vetor 1 são: ")
		para (cont = 0; cont < 30; cont++){
			escreva(vet[cont], " , ")		
		}
		escreva("\nOs valores do vetor 2 são: ")
		para (cont = 29; cont >= 0; cont--){
			escreva(vet[cont], " , ")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 215; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */