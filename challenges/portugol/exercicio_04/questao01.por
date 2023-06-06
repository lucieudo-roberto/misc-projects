
programa {
	funcao inicio () {
		inteiro numeros[6]
		real media = 0.0
		
		para ( inteiro x=0; x<6; x++ ) {
			escreva("Digite um número inteiro: ")
			leia(numeros[x])
			media += numeros[x]
		}
		
		escreva("\nA média dos 6 números é: ",(media/6),"\n")
	}
}