programa
{
	// feito por fransergio e allan denner
	funcao inicio()
	{
		inteiro op,m1,m2,maiorEntreDois, periodo, num, resultado, n
		real tab_res, peso, altura, imc_res, cap_inicial, montante_res, somatorio_res
		escreva(" Escolha entre as 3 opções ")
		escreva(" 1- Tabuada // 2- Maior elemento // 3- Calcular IMC // 4- Montante final do Mês // 5- Calcular fatorial // 6- Calcular somatorio ")
		leia(op)
		escolha(op){
			caso 1:
				escreva(" Digite um numero para ver sua tabuada ")
				leia(num)
				tabuada(num)
				pare
			
			caso 2: 
				escreva(" Digite um numero para ver o maior entre ambos ")
				leia(m1,m2)
				maiorEntreDois = maior(m1,m2)
				escreva(" O maior ente os doís é: ", maiorEntreDois)
				pare
			caso 3:
				escreva(" Digite seu peso ")
				leia(peso)
				escreva("\n Digite sua altura ")
				leia(altura)
				imc_res = imc(peso,altura)
				escreva(" O IMC é de: ", imc_res)
				pare
			
			caso 4:
				escreva(" Digite seu capital inicial ")
				leia(cap_inicial)
				escreva(" Digite um período de meses ")
				leia(periodo)
				montante_res = montante(cap_inicial,periodo)
				escreva(" O montante ao final do mês é de: ",montante_res)
				pare
			
			caso 5:
				escreva("Digite um numero para ser fatorado: ")
				leia(num)	
				fatorial(num)
				pare
			
			caso 6:
				escreva(" Digite o valor de N ")
				leia(n)
				somatorio(n)
				pare
		}
		
	}
	funcao tabuada(inteiro x){
		inteiro contador
		real atabuada
		cadeia msg
		para (contador = 0; contador < 11; contador++)
		{	
			escreva(contador, " x ", x, " = ", contador * x, "\n")
		}
	}
	funcao inteiro maior(inteiro x, inteiro y){
		inteiro omaior
		se(x < y){
			omaior = y
		}
			senao {
				omaior = x
			}
		retorne omaior
	}
	funcao real imc(real peso, real altura){
		real oimc
		oimc = peso / (altura * altura)
		retorne oimc 
	}
	funcao real montante(real cap_inicial, inteiro meses){
		real juros, omontante
		juros = 0.10

		omontante = (cap_inicial * juros)  * meses
		retorne omontante
	}
	funcao fatorial(inteiro x)
	{
		inteiro fat = 1, cont
		para (cont = 1; cont <= x; cont++)
		{
			fat = fat * cont
		}
		escreva("O fatorial do número ", fat, "\n")

	}
	funcao somatorio(inteiro n){
		inteiro cont, fatorial
		real s 
		s= 0
		fatorial = 1
		para(cont = 1; cont <= n; cont++){
			fatorial = cont * fatorial
			s = s + (1 / fatorial)
		}
		s = s + 1
          escreva("O resultado: ", s, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 53; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */