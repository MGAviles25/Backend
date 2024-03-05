export default class Cliente{
    #codigo;
    #cpf;
    #nome;
    #endereco;
    #bairro;
    #cidade;
    #estado;
    #telefone;
    #email;

    constructor(codigo =0, cpf ="", endereco ="", bairro="", cidade ="", estado ="", telefone ="", email ="") {
            this.#codigo = codigo;
            this.#cpf = cpf;
            this.#endereco = endereco;
            this.#bairro = bairro;
            this.#cidade = cidade;
            this.#estado = estado;
            this.#telefone = telefone;
            this.#email = email;

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

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novoCidade){
        this.#cidade = novoCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado = novoEstado;
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

    gravar(){
        
    }

    atualizar(){}

    excluir(){}

    consultar(termoDePesquisa){}
}