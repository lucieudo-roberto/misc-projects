
programa {
    
    funcao inicio() {
        real valor = 0.0
        escreva("Digite o valor de compra do produto: ")
        leia(valor)
        
        se ( valor < 10.0 ) {
            escreva("O valor de venda será: ",valor+((70*valor)/100)," R$\n")
        }senao {
            se ( valor == 10.0 e valor < 30.0 ) {
                escreva("\n-----------\n")
                escreva("O valor de venda será: ",valor+((50*valor)/100)," R$\n")
                escreva("-----------\n")
            }senao {
                se ( valor == 30.0 e valor < 50.0 ) {
                    escreva("\n-----------\n")
                    escreva("O valor de venda será: ",valor+((40*valor)/100)," R$\n")
                    escreva("-----------\n")
                }senao {
                    escreva("\n-----------\n")
                    escreva("O valor de venda será: ",valor+((30*valor)/100)," R$\n")
                    escreva("-----------\n")
                }
            }
        }
    }

}