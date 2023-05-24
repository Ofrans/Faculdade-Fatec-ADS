programa
{
	//PROGRAMA FEITO POR FRANSERGIO MORATO E ALLAN DENNER
	funcao inicio()
	{
		inteiro cont, i, j, menor_nota, maior_nota, acm_nota[50], alunos_aprovados
		cadeia gab[10], nome[50], resp_aluno[50][10]
		real media_turma,soma_nota, pct_alunos_aprovados

		alunos_aprovados = 0
		menor_nota = 10
		maior_nota = 0
		soma_nota = 0
		media_turma = 0
		
		escreva(" Gabarito da prova \n\n")
		escreva(" Escreva a resposta do gabarito ")
		escreva("\n(Respostas possiveis: A, B, C e D) \n")
		para(cont = 0 ; cont< 10; cont++){ // gabarito da  prova
			escreva("\n Digite a resposta da ", cont + 1, " Questão: ")
			leia(gab[cont])
			enquanto(gab[cont] != "A" e gab[cont] != "B" e gab[cont] != "C" e gab[cont] != "D"){ // caso o dado inserido seja invalido
				escreva("!! Dado incorreto, insira novamente !!")
				escreva("\n (Respostas possiveis: A, B, C e D) \n")
				escreva("\n Digite a resposta da ", cont + 1, " Questão: ")
				leia(gab[cont])
				}
		}
		limpa()
		escreva(" Pronto, agora vamos para as notas dos alunos \n")
			para(i = 0; i<50; i++){ //NUMERO DE ALUNOS
				escreva(" Digite o nome do ", i+ 1, " ° aluno ")
				leia(nome[i])
				para( j = 0; j < 10; j++){ //NUMERO DE RESPOSTAS DA PROVA
					escreva("\n Digite a resposta da ", j + 1, " Questão: ")
					leia(resp_aluno[i][j])
					enquanto(resp_aluno[i][j] != "A" e resp_aluno[i][j] != "B" e resp_aluno[i][j] != "C" e resp_aluno[i][j] != "D"){ //CASO O DADO INSERIDO SEJA INVALIDO
						escreva("!! Dado incorreto, insira novamente !!")
						escreva("\n Digite a resposta da ", j + 1, " Questão: ")
						leia(resp_aluno[i][j])
					}
					se (resp_aluno[i][j] == gab[j]){ // CASO A RESPOSTA DO ALUNO SEJA IGUAL AO DO GABARITO
						acm_nota[i] = acm_nota[i] + 1
					}
				}
			}
		para(cont = 0; cont < 50; cont++){
			se (acm_nota[cont] < menor_nota){ //CALCULO DA MENOR NOTA
				menor_nota = acm_nota[cont]
			}
				senao se(acm_nota[cont] > maior_nota){ //CALCULO DA MAIOR NOTA
					maior_nota = acm_nota[cont]
				}	
			se (acm_nota[cont] >= 6){ //CALCULO DE QUANTOS ALUNOS ESTÃO ACIMA DA MÉDIA
				alunos_aprovados = alunos_aprovados + 1
			}
			soma_nota = acm_nota[cont] + soma_nota //SOMA PRA REALIZAR A MEDIA DOS ALUNOS
		}
		media_turma = soma_nota / 50 // CALCULO DA MEDIA DOS ALUNOS
		pct_alunos_aprovados = (alunos_aprovados * 100) / 50 //CALCULO DO PERCENTUAL DE ALUNOS APROVADOS
		
		escreva(" A menor nota foi: ",menor_nota)
		escreva("\n A maior nota foi: ",maior_nota)
		escreva("\n A media da turma foi: ",media_turma)
		escreva("\n A quatidade de alunos com nota acima da média: ",alunos_aprovados)
		escreva("\n O percentual de alunos aprovados é de: ",pct_alunos_aprovados, " % ")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2380; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */