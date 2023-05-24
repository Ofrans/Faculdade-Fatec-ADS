programa
{
	
	funcao inicio()
	{
		const inteiro TAM = 3
		inteiro i,j
		inteiro mat[TAM][TAM]

		para(i=0; i<TAM; i++){
			para(j=0;j<TAM;j++){
				escreva("Digite o elemento: ")
				leia(mat[i][j])
			}
		}
		valoresneg(mat,TAM)
		escreva("\nSaída...\n")
		para(i=0;i<TAM; j++){
			para(j=0;j<TAM;j++){
				escreva("  ")
			}
		escreva("\n")
		}
	}
	funcao valoresneg(inteiro mat[][], inteiro tam){
		inteiro i,j
		para( i=0; i<6; i++){
			para(j=0;j<6;j++){
				se(mat[i][j] < 0 e i != j e j != tam-1-i){
					mat[i][j] = 0	
				}
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 523; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */