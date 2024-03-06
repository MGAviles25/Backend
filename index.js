import Cliente from "./modelo/Ciente.js";


const cliente = new Cliente(0,"122.435.234.32", "marcos", "12/12/2012", "(12)99999-0000", "marco@ip.com", "SP");

console.log(cliente.toJSON())