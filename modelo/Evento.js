import EventoDAO from "../persistencia/EventoDAO.js";

export default class Evento {
    #codigo;
    #cpf;
    #nome;
    #dataNasc;
    #telefone;
    #email;
    #cidade;

    constructor(codigo=0, cpf="",nome="", dataNasc="",  telefone="", email="", cidade="") {
            this.#codigo = codigo;
            this.#cpf = cpf;
            this.#nome = nome;
            this.#dataNasc = dataNasc;
            this.#telefone = telefone;
            this.#email = email;
            this.#cidade = cidade;

    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get dataNasc(){
        return this.#dataNasc;
    }

    set dataNasc(novoDataNasc){
        this.#dataNasc = novoDataNasc;
    }

    
    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }
    get cidade(){
        return this.#cidade;
    }

    set cidade(novoCidade){
        this.#cidade = novoCidade;
    }
    async gravar(){
        const eventoDAO = new EventoDAO();
        const resultados = await eventoDAO.consultar();


        console.table(resultados);

        
    }

    async atualizar(){
    const dao = new EventoDAO();
    await dao.atualizar(this);
    }
    async excluir(){
        const dao = new EventoDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new EventoDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return `Cliente código: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return{
            "codigo":this.#codigo,
            "cpf": this.#cpf,
            "nome":this.#nome,
            "dataNasc":this.#dataNasc,
            "telefone":this.#telefone,
            "email":this.#email,
            "cidade":this.#cidade 
        }
    }
 }