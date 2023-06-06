
programa {
	funcao inicio () {
        inteiro numeros[8]
		inteiro pares =  0
		
		para ( inteiro x=0; x<8; x++ ) {
			escreva("Digite um número inteiro: ")
			leia(numeros[x])
			
			se (numeros[x]%2 == 0 ){pares+=1}
		}
		
		escreva("\nhá ",pares," números pares no vetor \n")
	}
}