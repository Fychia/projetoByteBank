export class ContaCorrente{
    agencia;
    // conta;
    _saldo = 0;   // #Campo igual a zero privado // _Campo igual a zero privado // Propostas de elementos privados


    depositar(valor){
        if (valor > 0 ){
            this._saldo += valor;
            console.log("Foi depositado", valor);
            console.log("Seu saldo atual é de: ",this._saldo)

        }
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log("Valor de", valor, "sacado!")
            console.log("Seu saldo atual é de: ",this._saldo)
        }else{
            console.log("Tentativa de saque. \nNão foi possivel realizar o saque saldo insuficiente.")
        }

    }
}

