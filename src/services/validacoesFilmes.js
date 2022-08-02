export default class ValidacoesFilmes{

    static validaName(name){
        return name.lenght >= 2
    }

    static validaduracao(duracao){
        return duracao.lenght >= 4 & duracao.lenght >=5
    }

    static validaanoLancamento(anoLancamento){
        return anoLancamento.lenght === 4
    }

    static validadiretor(diretor){
        return diretor.lenght >= 2
    }

    static validasinopse(sinopse){
        return sinopse.lenght >= 10
    }

}