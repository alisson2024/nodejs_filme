import { salvarFilme, consultarFilmePorNome } from "../../repository/filmerepository.js"
import { validarNovoFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";

export default async function salvarFilmeService(filmeObj){
   //validacao de campos obrigatorios
    validarNovoFilme(filmeObj);

    // busca filmes com os mesmos nomes
    let registros = await consultarFilmePorNome(filmeObj.nome)


    //validacao se existe filme com o mesmo nome
    validarFilmeIgual(registros);


    //logica de negocio(ir la no repositorio e salvar o filme)
    let id = await salvarFilme(filmeObj);
    return id;
}