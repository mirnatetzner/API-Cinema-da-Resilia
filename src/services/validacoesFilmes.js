export default class ValidacoesFilmes{

    static validaNome(nome){
        return nome.length >= 1
    }
    static validaGenero(genero){
        return genero.length >= 1
    }
    static validaDuracao(duracao){
        return duracao.length >= 1
    }
    static validaAnoLancamento(anoLancamento){
        return anoLancamento.length >= 1
    }
    static validaDiretor(diretor){
        return diretor.length >= 1
    }
    static validaSinopse(sinopse){
        return sinopse.length >= 1
    }

    static isValid(nome, genero, duracao, anoLancamento, diretor, sinopse){
    return this.validaNome(nome)  && this.validaGenero(genero) && this.validaDuracao(duracao) && this.validaAnoLancamento(anoLancamento) && this.validaDiretor(diretor) && this.validaSinopse(sinopse)
}
}