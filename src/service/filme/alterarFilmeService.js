import { alterarFilme } from "../../repository/filmerepository.js";


export default async function alterarFilmeService(filme,id){
   let linhasAfetadas= await alterarFilme(filmeObj,id);

   if(linhasAfetadas == 0)
    throw new Error('Nenhum filme alterado');
}