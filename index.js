import Cliente from "./modelo/Cliente.js";


const cliente = new Cliente(3, "143.432.875-10", "marcos", "10/12/2010", "(10)32131-3313", "marco@ig.com", "parapuã");

console.log(cliente.toString());
console.log(cliente.toJSON());

cliente.gravar().then(function(){
    console.log("cliente gravado com sucesso");
}).catch(function (erro){
    console.log(erro.message);
});