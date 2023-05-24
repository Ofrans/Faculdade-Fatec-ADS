programa
{	 
	funcao inicio()
	{

		//feito por fransergio e allan denner
		inteiro cpf[11],mult1[]={10,9,8,7,6,5,4,3,2},mult2[]={11,10,9,8,7,6,5,4,3,2},soma,resto,cont
		soma = 0


  	  	para(cont = 0; cont < 11; cont++) {
      		escreva(" ///   digite o digito  ", cont + 1,  " ° do CPF /// ")
     		leia(cpf[cont])
     		enquanto (cpf[cont] < 0 ou cpf[cont] >= 10 ){
     			escreva(" /// Numero invalido, reescreva o ", cont + 1,  " ° do CPF novamente /// ")
     			leia(cpf[cont])
     		}
    		}

    		para(cont = 0; cont < 9; cont++) {
    	  		soma+=(cpf[cont] * mult1[cont])
    		}
		resto = (soma*10) % 11
		se(resto == 10){
      	resto = 0
    		}
   		se(resto != cpf[9]){
      		escreva("///   !! CPF inválido !!    ///")
    		} 
    			senao {
      				soma=0
      				para(cont = 0; cont < 10; cont++){
      					soma+=(cpf[cont] * mult2[cont])
    					}
    					resto = (soma*10) % 11

    					se(resto == 10){
      					resto = 0
    					}
    					se(resto != cpf[10]){
      					escreva("///    O CPF é inválido!    ///")
      				}
     			 senao{
        					escreva("///   O CPF é válido   /// ")
      				 }
    				 }
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 370; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */