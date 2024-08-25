import { alterarCapaFilme } from "../../repository/filmerepository.js";
import { validarCamposObrigatoriosFilme } from "../../validation/filme/filmeValidation.js";

export default async function alterarCapaFilmeService(id, caminhoImagem) {
    // Valida campos obrigatorios!
    validarCamposObrigatoriosFilme(filmeObj);

    // vai e usa a funcao do repositorio e volta para ca
   let linhasAfetadas = await alterarCapaFilme(id, caminhoImagem);
    if(linhasAfetadas == 0)
        throw new Error('Imagem não alterada');
}