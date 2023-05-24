programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro mat[5][5],lin,col
		
		para(lin = 0; lin < 3; lin++){
			para(col= 0 ; col< 3; col++){
					escreva("\nEscrita da matriz ")
					leia(mat[lin][col])	
				}
		}
		para(lin=0;lin<3;lin++){
			escreva(mat[lin][lin]," ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 255; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */