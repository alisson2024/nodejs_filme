import { logError } from "../utils/log.js";
import { criarErro } from "../utils/error.js";



import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/filme/alterarCapaFilmeService.js";

import multer from "multer";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/filme', async (req,resp) => {
   try {
    
    let filmeObj=req.body;

    let id = await salvarFilmeService(filmeObj);

    resp.send({
        id: id
    })
   } 

   catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
   }

})

endpoints.get ('/filme', async (req,resp) => {
    try {
        //leitura
        let nome=req.query.nome;

        //processamento (service)
        let registros= await consultarFilmesService(nome);

        //saida
        resp.send(registros);
    } 
    catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err));
       }
    
})

endpoints.get('/filme/:id', async (req,resp) => {
    try {
        let id = req.params.id;

        let filme = await consultarFilmePorIdService(id);

        resp.send(filme);

    } 
    catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err));
    }
})


endpoints.put('/filme/:id', async (req,resp) => {
    
  try{
    //ler entradas 
 let filmeObj=req.body;
 let id= req.params.id;

 //processamneto(Service)
 await alterarFilmeService(filmeObj,id);

 //saida response

 resp.status(204).send();

} 

 catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
}
  
})


endpoints.delete('/filme/:id', async (req,resp) => {
    try {
        //entrada
        let id=req.params.id;

        //processamento
        await deletarFilmeService(id);

        //saída
        resp.status(204).send();
    }

    catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err));
    }
})


    let uploadCapa = multer({ dest: './storage/capa'})
endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req,resp) => {
    try {

        //Entradas
        let id= req.params.id;
        // O multer vai joga o arquivo para dentro do file; e eu acesso o caminho para a pasta storage com path.
        let caminhoImagem= req.file.path;

        //Processamento(service)

       await alterarCapaFilmeService(id, caminhoImagem);

        // saida response
        resp.status(204).send();
    }
    catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;