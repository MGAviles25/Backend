import conectar from "./Conexão.js";
import Cliente from "../modelo/Ciente.js";
export default class ClienteDAO{

    async gravar(cliente){
        if(cliente instanceof Cliente){  
            const conexão = await conectar();
            const sql = 'INSERT INTO cliente (cpf, nome, dataNasc, telefone, email, cidade) values (?, ?, ?, ?, ?, ?)';
            const parametros = [
                cliente.cpf,
                cliente.nome,
                cliente.dataNasc,
                cliente.telefone,
                cliente.email,
                cliente.cidade

            ];
            const[resultados, campos] = await conexao.execute(sql,parametros);
            cliente.codigo = resultados.insertId
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

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(cliente){   
        if(cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = `DELETE FROM cliente WHERE codigo = ?`;
            const parametros = [
                cliente.codigo
            ]
            await conexao.execute(sql,parametros);
        }

    }

    async consultar(termoDePesquisa){
        if ( termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(termoDePesquisa)){
            sql = `SELECT * FROM cliente WHERE nome LIKE '%?%'`;
        
        }
        else{
            sql = `SELECT * FROM cliente WHERE codigo = ?`;
        }

        const conexao = await conectar();
        const [registro] = await conexao.execute(sql,[termoDePesquisa]);

    }

}