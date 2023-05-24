programa
{
	
	funcao inicio()
	{
	inteiro num1, num2
	cadeia op


	escreva("Digite o primeiro numero : \n")
	leia(num1)

	escreva("Digite o segundo numero : \n")
	leia(num2)

	escreva("Digite a operação : ")
	leia(op)

		se(op == "+")
		{
			escreva("resultado da adição = ", num1 + num2)
		}
		senao
		{
				se(op == "-")
			{
				escreva("resultado da subtração = ", num1 - num2)
			}
					senao
					{
						se(op == "*")
						{
							escreva("resultado da multiplicação = ", num1 * num2)
						}
							senao
							{
								se(op == "/")
									{
										escreva("resultado da divisão = ", num1 / num2)
									}		
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
 * @POSICAO-CURSOR = 65; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */