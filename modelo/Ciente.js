import ClienteDAO from "../persistencia/ClienteDAO";

export default class Cliente{
    #codigo;
    #cpf;
    #nome;
    #dataNasc;
    #telefone;
    #email;
    #cidade;

    constructor(codigo =0, cpf ="", dataNasc ="", nome ="", telefone ="", email ="", cidade = "") {
            this.#codigo = codigo;
            this.#cpf = cpf;
            this.#dataNasc = dataNasc;
            this.#telefone = telefone;
            this.#email = email;
            this.#nome = nome;
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
}