
programa {
	
	inteiro acumulador = 0
	inteiro reg_estado = 0 
	
	funcao inteiro execute(inteiro opcode, inteiro data) {

	    se ( reg_estado == 1 ) { 
			escolha (opcode) {
				caso 0: acumulador += data pare
                caso 1: acumulador -= data pare
                caso 2: acumulador *= data pare
                caso 4: acumulador /= data pare
			}
			
			reg_estado = 0
			retorne 0
	    	
	    } senao {
			reg_estado = 1
			acumulador = data
			retorne 1
		}
	}
	
	
	funcao inicio() {
		 // opcodes --> 000  : op:0  + 
		 // opcodes --> 001  : op:1  - 
		 // opcodes --> 100  : op:4  ÷
		 // opcodes --> 010  : op:2  *
		 
		 execute(0,3) // primeiro "clock"
		 execute(1,2) // segundo.
		 
		 escreva(acumulador) // saida 1 
	}
}
