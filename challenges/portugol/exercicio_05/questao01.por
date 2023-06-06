
programa {
	funcao inicio() {
		const inteiro COL = 3
		const inteiro LIN = 2
		
		inteiro valores[COL][LIN]
		
		para (inteiro y=0; y<COL; y++) {
		para (inteiro x=0; x<LIN; x++) {
			escreva("digite um valor inteiro: ")
			leia(valores[y][x])
		}}
		
		escreva("\nMatriz original: \n\n")
		
		para (inteiro y=0; y<COL; y++) {
		para (inteiro x=0; x<LIN; x++) {
			escreva("\t",valores[y][x],' ')
		}escreva("\n")}
		
		
		escreva("\nMatriz modificada: \n\n")
		
		
		para (inteiro y=0; y<COL; y++) {
		para (inteiro x=0; x<LIN; x++) {
		    
		    se (valores[y][x] %3 == 0 ) {
			    valores[y][x] = 1
		    }
            escreva("\t",valores[y][x],' ')
            
		}escreva("\n")}
		
		
	}
}