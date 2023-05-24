programa
{
	// iago e fransergio fizeram juntos	
	funcao inicio()
	{
		inteiro antecessor[30],cont
		
		antecessor[0] = 1
		antecessor[1] = 1		
		para(cont = 2; cont < 30; cont++){
				antecessor[cont] = antecessor[cont - 1] + antecessor[cont - 2]			
			}
		para(cont = 0; cont<30; cont++){
			escreva(antecessor[cont],"\n")
		}
	
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 247; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */