programa
{
	
	funcao inicio()
	{
		inteiro vetor[10],cont
		real multi

		para (cont = 0; cont < 11; cont++){
			escreva("Digite o ", cont + 1, " ° numero ")
			leia(vetor[cont])
			multi = vetor[cont] * 3
			escreva(cont," ° = ", multi,"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 210; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */