import conectar from "./Conexão.js"; 
import Cliente from "../modelo/Cliente.js";

export default class ClienteDAO{
    async gravar(cliente){
        if (cliente instanceof Cliente){
            const conexão = await conectar();
            const sql = `INSERT INTO cliente (cpf, nome, dataNasc, telefone, email, cidade) values (?, ?, ?, ?, ?, ?)`;
            const parametros = [
                cliente.cpf,
                cliente.nome,
                cliente.dataNasc,
                cliente.telefone,
                cliente.email,
                cliente.cidade 
            ];
            const [resultados, campos] = await conexão.execute(sql,parametros);
            
            cliente.codigo = resultados.insertId; 
        }
    }

    async atualizar(cliente){
        if(cliente instanceof Cliente){
            const conexão = await conectar();
            const sql = `UPDATE cliente SET cpf = ?, nome = ?, dataNasc = ?, telefone = ?, email = ?, cidade= ? WHERE codigo = ?`;
            const parametros = [
                cliente.cpf,
                cliente.nome,
                cliente.dataNasc,
                cliente.telefone,
                cliente.email,
                cliente.cidade 

            ];

            await conexão.execute(sql,parametros);
        }
    }

    async excluir(cliente){   
        if(cliente instanceof Cliente){
            const conexão = await conectar();
            const sql = `DELETE FROM cliente WHERE codigo = ?`;
            const parametros = [
                cliente.codigo
            ]
            await conexão.execute(sql,parametros);
        }

    }

    async consultar(termoDePesquisa){
        if ( termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(termoDePesquisa)){
            sql = `SELECT * FROM cliente WHERE nome LIKE '%?%'`;
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM cliente WHERE codigo = ?`;
        }

        const conexão = await conectar();
        const [registro] = await conexão.execute(sql,[termoDePesquisa]);

        let listaCliente = [];
        for (const registro of registros){
            const cliente = new Cliente(  
                cliente.cpf,
                cliente.nome,
                cliente.dataNasc,
                cliente.telefone,
                cliente.email,
                cliente.cidade 

            );
            listaCliente.push(cliente)

        }
        return listaCliente
    }

}