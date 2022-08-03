export default class ValidacoesIngresso {
    static validaFilme(filme) {
        return filme >= 2
    }

    static validaSala(sala) {
        sala >= 1 && sala <= 10
    }

    static validaAssento(assento) {

    }

    static validaDataHora(dataHora) {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
        return regex.test(dataHora)
    }   

    static validaPrecoIngresso(precoIngresso) {
        precoIngresso === Boolean ? precoIngresso : Error
    }

    static validaCodigoDeBarra(codigoDeBarra) {
        return codigoDeBarra.length = 12
    }
}