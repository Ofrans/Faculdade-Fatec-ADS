programa
{
	
	funcao inicio()
	{
	
		real altura,peso_ideal
		cadeia sexo



	
		escreva("Altura?   ")
		leia(altura)
		limpa()

		escreva("Qual o sexo \n\nM-masculino\nF-feminino)?  \n")
		leia(sexo)
		
		
		se(sexo == "M" ou sexo == "m")
		{
			peso_ideal = (72.7 * altura) - 58	
				
		}
		senao
		{
			peso_ideal = (62.1 * altura) - 44.7
		}
		escreva("seu peso ideal é de: ",peso_ideal,"\n\n\n\n\n")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 241; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */