import Evento from "./modelo/Evento.js";


const evento = new Evento(3, "143.432.875-10", "marcos", "10/12/2010", "(10)32131-3313", "marco@ig.com", "parapuã");


evento.gravar().then(() =>{
    console.log("participante gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});