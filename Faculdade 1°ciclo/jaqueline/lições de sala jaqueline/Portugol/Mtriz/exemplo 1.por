programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro mat[5][5],lin,col
		
		escreva("\nEscrita da matriz\n")
		para(lin = 0; lin < 5; lin++){
			para(col= 0 ; col< 5; col++){
				escreva("\nEscrita da matriz ")
				leia(mat[lin][col])	
			}
		}
		para (lin=0; lin<5; lin++){
			
			escreva(mat[lin][4-lin]," ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 268; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */