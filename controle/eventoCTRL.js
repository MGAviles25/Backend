import Evento from "../modelo/Evento";

export default class EventoCTRL{

    gravar(requisicao, resposta){
        if(requisicao.methood === "POST" && requisicao.is('apliccation/json')){
            const dados = requisicao.body; 
            const cpf = dados.cpf;
            const nome = dados.nome;
            const dataNasc = dados.dataNasc;
            const telefone = dados.telefone;
            const email = dados.email;
            const cidade = dados.cidade;


            if (cpf && nome && dataNasc && telefone && email && cidade ){
                const evento = new Evento(0, cpf, nome, dataNasc, telefone, email, cidade);
                evento.gravar().then(()=>{
                    resposta.status(201);
                    resposta.json({
                        "status":true,
                        "mensagem": "Evento gravado com sucesso!",
                        "codigo_evento": evento.codigo
                    });
                }).catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível armazenar o evento! " + erro.message
                    })
                });
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Por favor, informe todos os dados do evento, conforme documentação da API"
                });
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida! Esperando o método POST e dados no formato JSON para gravar um cliente!"
            })
        }
    }
        

    atualizar(requisicao, resposta){
        resposta.type('application/json');
        if ((requisicao.method === "PATCH" || requisicao.method === "PUT") && requisicao.is('application/json')){
            const dados = requisicao.body; 
            const codigo = requisicao.params.codigo;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const dataNasc = dados.dataNasc;
            const telefone = dados.telefone;
            const email = dados.email;
            const cidade = dados.cidade;
            if (cpf && nome && dataNasc && telefone && email && cidade)
            {
                const evento = new Evento(codigo, cpf, nome, dataNasc, telefone, email, cidade);
                evento.atualizar()
                .then(()=>{
                    resposta.status(200);
                    resposta.json({
                        "status":true,
                        "mensagem": "Evento atualizado com sucesso!",
                    })
                })
                .catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível atualizar o evento! " + erro.message
                    })
                });
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Por favor, informe todos os dados do evento, conforme documentação da API"
                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida! Esperando o método PATCH, PUT e dados no formato JSON para atualizar um evento!"
            })
        }
    }

    excluir(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === "DELETE"){
            
            const codigo = requisicao.params.codigo;
            if (codigo && codigo > 0){
                const evento = new Eventovento(codigo);
                evento.excluir()
                .then(()=>{
                    resposta.status(200);
                    resposta.json({
                        "status":true,
                        "mensagem": "Evento excluído com sucesso!",
                    })
                })
                .catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível excluir o evento! " + erro.message
                    })
                })
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Por favor, informe o código do evento que deseja excluir, conforme documentação da API"
                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida! Esperando o método DELETE para excluir um evento!"
            })
        }
    }

    consultar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === "GET"){
            const termoDePesquisa = requisicao.params.termo;
            const evento = new Evento(0);
            evento.consultar(termoDePesquisa)
            .then((eventos)=>{
                resposta.status(200);
                resposta.json(eventos);
            })
            .catch((erro) =>{
                resposta.status(500);
                resposta.json({
                    "status":false,
                    "mensagem": "Não foi possível consultar os eventos! " + erro.message
                })
            })
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida! Esperando o método GET para consultar os eventos!"
            })
        }
    }

}