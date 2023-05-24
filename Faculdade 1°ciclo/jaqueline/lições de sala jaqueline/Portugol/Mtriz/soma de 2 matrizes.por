programa
{
	
	funcao inicio()
	{
		inteiro mat[3] [3], lin, col,mat2[3][3], mat3[3][3]

		escreva("leitura d1 matriz 1 \n")
		para (lin=0; lin<3; lin++){
			para(col=0; col<3; col++){
				escreva("Digite o valor: ")
				leia(mat[lin][col])
			}
		}
		escreva("leitura da matriz 2 \n")
		para (lin=0; lin<3; lin++){
			para(col=0; col<3; col++){
				escreva("Digite o valor: ")
				leia(mat2[lin][col])
			}
		}
		escreva("\nEscrita da matriz\n")
		escreva("O resultado da soma das duas matrizes é \n")
		para (lin=0; lin<3; lin++){
			para (col=0; col<3; col++){
				mat3[lin][col] = mat[lin][col] + mat2[lin][col]
				escreva(mat3[lin][col]," ")
			}
			escreva("\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 499; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */