import ClienteDAO from "../persistencia/ClienteDAO.js";

export default class Cliente{
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

    get codigo(){
        return this.#codigo;
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

    get cidade(){
        return this.#cidade;
    }

    set cidade(novoCidade){
        this.#cidade = novoCidade;
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

    async gravar(){
        const dao = new ClienteDAO();
        await dao.gravar(this);
        
    }

    async atualizar(){
    const dao = new ClienteDAO();
    await dao.atualizar(this);
    }
    async excluir(){
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return `Cliente código: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return{
            "codigo":this.#codigo = codigo,
            "cpf": this.#cpf = cpf,
            "nome":this.#nome = nome,
            "dataNasc":this.#dataNasc = dataNasc,
            "telefone":this.#telefone = telefone,
            "email":this.#email = email,
            "cidade":this.#cidade = cidade
        }
    }
 }