

export function validarCamposObrigatoriosFilme(filmeObj) {
    if (!filmeObj.nome)
        throw new Error('Nome do filme Obrigatorio');

    if (!filmeObj.sinopse)
        throw new Error('sinopse do filme Obrigatorio');

    if (!filmeObj.avaliacao)
        throw new Error('avaliacao do filme Obrigatorio');
    if (isNaN(filmeObj.avaliacao))
        throw new Error('avaliacao do filme invalida');

    if (!filmeObj.lancamento)
        throw new Error('lancamento do filme Obrigatorio');

    if (filmeObj.disponivel == undefined)
        throw new Error('Disponivel do filme Obrigatorio');
}


export function validarFilmeUnico(registros){
    if(registros.lenght == 0)
        throw new Error('Filme não encontrado');
}



export function validarFilmeIgual(registros){
    if(registros.lenght > 0)
        throw new Error('Já existe filme com esse nome');
}