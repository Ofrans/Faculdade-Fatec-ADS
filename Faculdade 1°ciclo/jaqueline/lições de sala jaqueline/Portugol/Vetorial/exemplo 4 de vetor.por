programa
{
	
	funcao inicio()
	{
		inteiro vetor1[50],vetor2[50],cont
		real soma[3]
		
		
		para (cont = 0; cont < 50; cont++){
			escreva("Digite a ", cont+1, " ª ")
			leia(vetor1[cont])	
			soma[0] = soma[0] + vetor1[cont]
		}
		
		para (cont = 0; cont < 50; cont++){
			escreva("Digite a ", cont+1, " ")
			leia(vetor2[cont])	
			soma[1] = soma[1] + vetor2[cont]
		}
		soma[2] = soma[0] + soma[1]
		escreva(" o resultado da soma é : ", soma[2])
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 448; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = vetor, matriz, funcao;
 */