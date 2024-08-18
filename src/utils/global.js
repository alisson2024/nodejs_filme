

global.criarErro= function criarErro(err){
   let obj = {
       erro: err.message
   }
   return obj;
}



import { horaAtual } from "./datetime.js";

global.logErro= function logError(err){
   console.log(horaAtual() + 'ERROR --->' + err.message);
}
   