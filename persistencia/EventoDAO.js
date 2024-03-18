import conectar from "./Conexão.js"; 
import Evento from "../modelo/Evento.js";

export default class EventoDAO{
    async gravar(evento){
        if (evento instanceof Evento){
            const conexão = await conectar();
            const sql = `INSERT INTO evento (cpf, nome, dataNasc, telefone, email, cidade) values (?, ?, ?, ?, ?, ?)`;
            const parametros = [
                evento.cpf,
                evento.nome,
                evento.dataNasc,
                evento.telefone,
                evento.email,
                evento.cidade 
            ];
            const [resultados,  ] = await conexão.execute(sql,parametros);
            
            evento.codigo = resultados.insertId; 
        }
    }

    async atualizar(evento){
        if(evento instanceof Eventovento){
            const conexão = await conectar();
            const sql = `UPDATE evento SET cpf = ?, nome = ?, dataNasc = ?, telefone = ?, email = ?, cidade= ? WHERE codigo = ?`;
            const parametros = [
                evento.cpf,
                evento.nome,
                evento.dataNasc,
                evento.telefone,
                evento.email,
                evento.cidade

            ];

            await conexão.execute(sql,parametros);
        }
    }

    async excluir(evento){   
        if(evento instanceof Evento){
            const conexão = await conectar();
            const sql = `DELETE FROM evento WHERE codigo = ?`;
            const parametros = [
                evento.codigo
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
            sql = `SELECT * FROM evento WHERE nome LIKE '%?%'`;
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM evento WHERE codigo = ?`;
        }

        const conexão = await conectar();
        const [registros] = await conexão.execute(sql,[termoDePesquisa]);

        let listaEvento = [];
        for (const registro of registros){
            const evento = new Evento(  
                registro.cpf,
                registro.nome,
                registro.dataNasc,
                registro.telefone,
                registro.email,
                registro.cidade 

            );
            listaEvento.push(evento)

        }
        return listaEvento
    }

}