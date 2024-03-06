import Cliente from "./modelo/Ciente.js";


const cliente = new Cliente(0,"122.435.234.32", "marcos", "12/12/2012", "(12)99999-0000", "marco@ip.com", "SP");


const clienteQQ = new Cliente();

clienteQQ.consultar(3).then((listaClientes) => {
    console.log("Clientes encontrados:")
    for (const cliente of listaClientes) {
        console.log(cliente.toJSON());
    }
}).catch((erro) => {
    console.log("Não foi possível consultar o cliente", erro);
});