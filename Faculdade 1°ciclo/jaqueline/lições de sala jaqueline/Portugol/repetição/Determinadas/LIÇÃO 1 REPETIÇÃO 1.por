programa
{
	inclua biblioteca Matematica --> mat
	
	
	funcao inicio()
	{
		cadeia tip_vinho
		real por_vinho, perc_tinto, perc_branco, perc_rose, total
		inteiro tinto, branco, rose



		tinto = 0
		branco = 0
		rose = 0
		
		faca
		{ 
			escreva("Qual tipo de vinho\n")
			escreva("  T- Tinto\n")
			escreva("  B- Branco\n")
			escreva("  R- Rosê\n")
			escreva("*** F- Fecha o programa ***\n\n\n")
			escreva("ATENÇÃO, UTILIZE SOMENTE LETRAS MAIUSCULAS\n")
			leia(tip_vinho)
			

			se (tip_vinho == "T")
			{
				tinto = tinto + 1
			}
			se (tip_vinho == "B")
			{
				branco = branco + 1
			}
			se (tip_vinho == "R")
			{
				rose = rose + 1
			}
		total = tinto + branco + rose
		
		perc_tinto = mat.arredondar((tinto / total) * 100, 2)
		perc_branco = mat.arredondar((branco / total) * 100, 2)
		perc_rose = mat.arredondar((rose / total) * 100, 2)

		escreva("O percentual de vinhos tinto é de ", perc_tinto,"\n")
		escreva("O percentual de vinhos branco é de ", perc_branco,"\n")
		escreva("O percentual de vinhos rosê é de ", perc_rose,"\n")
		
		
		
		
			
		}

		enquanto (tip_vinho != "F")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 252; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */