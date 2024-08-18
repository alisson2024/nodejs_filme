import { consultarFilmes } from "../../repository/filmerepository.js";


export default async function consultarFilmesService(nome){
    if(!nome) {
        nome = '';
    }

let registros = consultarFilmes(nome);

return registros;
}