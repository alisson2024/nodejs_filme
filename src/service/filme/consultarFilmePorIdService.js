import { consultarFilmePorId } from "../../repository/filmerepository.js";
import { validarFilmeUnico } from "../../validation/filme/filmeValidation.js";

export default function consultarFilmePorIdService (id){
    let registros = consultarFilmePorId(id);
    validarFilmeUnico(registros);
    let  filme = registros [0];
    return filme;
}