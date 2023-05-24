programa
{
	
	funcao inicio()
	{
		inteiro vetor[20], vetor2[20], vetor3[20],cont
			
		para(cont = 0; cont<20; cont++){
			escreva("Digite um numero ")
			leia(vetor[cont])
			se (vetor[cont] % 2 == 0){
				vetor2[cont] = vetor[cont] 
			}
			senao{
				vetor3[cont] = vetor[cont] 
			}
		}
		escreva("Os numeros digitados são: ")
		para (cont = 0; cont < 20; cont++){
			escreva(vetor[cont], " , ")		
		}
		escreva("\nOs numeros pares são : ")
		para (cont = 0; cont < 20; cont++){
			se(vetor2[cont] != 0){
				escreva(vetor2[cont], " , ")
			}
		}
		escreva("\nOs numeros impares são : ")
		para (cont = 0; cont < 20; cont++){
			se(vetor3[cont] != 0){
				escreva(vetor3[cont], " , ")
			}
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 609; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */