programa
{
	
	funcao inicio()
	{
	cadeia funcionario
	inteiro nCarros
	real venda, salario
		escreva("Nome do Funcionário: ")
		leia(funcionario)

		escreva("Quantos carros foram vendidos pelo funcionário: ")
		leia(nCarros)

		escreva("Digite o valor das Vendas ")
		leia(venda)

		salario = 500.00 + ( 50.00 * nCarros) + (venda * 0.05)

		escreva("O salario do mês do funcionário foi de : ", salario)

		

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 422; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */