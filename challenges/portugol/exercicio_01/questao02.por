
programa {
    funcao inicio() {
	    real nota_1, nota_2, nota_3, media

		escreva("digite a nota da 1° prova: ")
		leia(nota_1)

		escreva("digite a nota da 2° prova: ")
		leia(nota_2)

		escreva("digite a nota da 3° prova: ")
		leia(nota_3)


		media = ((nota_1+nota_2+nota_3)/3)

		se ( media >= 6 ) {
		    escreva ("\nParabéns, você foi aprovado!\n")
		}senao {
		    escreva("\nInfelizmente você não foi aprovado!\n")
		}
	}
}
