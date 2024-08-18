import { salvarFilme } from "../../repository/filmerepository.js"
import { validarNovoFilme } from "../../validation/filme/filmeValidation.js";

export default async function salvarFilmeService(filmeObj){
   //validacao
    validarNovoFilme(filmeObj);

    //logica de negocio(ir la no repositorio e salvar o filme)
    let id = await salvarFilme(filmeObj);
    return id;
}