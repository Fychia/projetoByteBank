// "scripts": {
//     "start": "node index.js"
// }

import {ContaCorrente} from "./ContaCorrente.js"
import {Cliente} from "./Cliente.js"

console.log("Welcome to ByteBank")

//Cliente1
const cliente1 = new Cliente ();
cliente1.nome = "Ricardo dos Santos Almeida Vasconselo";
cliente1.rg = 6666669;
cliente1.cpf = 666666;
//Conta1
const ContaCorrenteRicardoDosSantosAlmeidaVasconselo = new ContaCorrente();
ContaCorrenteRicardoDosSantosAlmeidaVasconselo.agencia = 1001;
// ContaCorrenteRicardoDosSantosAlmeidaVasconselo.conta = 0002;
ContaCorrenteRicardoDosSantosAlmeidaVasconselo._saldo = 0;
/////////////Interações//////////////
// console.log(ContaCorrenteRicardoDosSantosAlmeidaVasconselo.saldo)
// ContaCorrenteRicardoDosSantosAlmeidaVasconselo.saldo = 100;
// console.log(ContaCorrenteRicardoDosSantosAlmeidaVasconselo.saldo)
ContaCorrenteRicardoDosSantosAlmeidaVasconselo.sacar(50)
ContaCorrenteRicardoDosSantosAlmeidaVasconselo.depositar(500)
ContaCorrenteRicardoDosSantosAlmeidaVasconselo.sacar(250)

//Cliente2
// const cliente2 = new Cliente();
// cliente2.nome = "Alice Alencar Alcantara";
// cliente2.rg = 56515651;
// cliente2.cpf = 669966;
// //Conta2
// const ContaCorrenteAliceAlencarAlcantara = new ContaCorrente();
// ContaCorrenteAliceAlencarAlcantara.agencia = 1001;
// ContaCorrenteAliceAlencarAlcantara.conta = 0000000002;
// ContaCorrenteAliceAlencarAlcantara.#saldo = 0;


console.log(cliente1);
console.log(ContaCorrenteRicardoDosSantosAlmeidaVasconselo);

