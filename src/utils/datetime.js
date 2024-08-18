





export function horaAtual(){
    let agora = new date ();
   let msg= agora.toLocaleDateString() + '' + agora.toLocaleTimeString();
   return msg
}