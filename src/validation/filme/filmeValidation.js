

export function validarNovoFilme(filmeObj) {
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