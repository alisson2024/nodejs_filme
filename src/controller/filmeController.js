import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";

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

export default endpoints;