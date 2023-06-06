
programa {
    funcao inicio() {
	    real salario 

		escreva("Digite o valor do salário: ")
		leia(salario)


		se ( salario <= 1500 ) {
		    escreva("O funcionário terá um aumento de 15%\n")
		}senao {
            se ( salario <= 2500 ) {
                escreva("O funcionário terá um aumento de 10%\n")
		    }senao {
			    escreva("O funcionario terá um aumento de 5%\n")
			}
		}
    }
}
