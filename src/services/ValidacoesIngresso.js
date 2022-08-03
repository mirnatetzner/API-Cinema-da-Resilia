<<<<<<< HEAD
import ValidacoesService from "./ValidacoesService.js";
export default class ValidacoesIngresso {

=======
export default class ValidacoesIngresso {
>>>>>>> develop
    static validaFilme(filme) {
        return filme >= 2
    }

    static validaSala(sala) {
<<<<<<< HEAD
        sala >= 1&& sala <= 10
    }

    static validaCadeira(cadeira) {
        if (typeof cadeira != "boolean" ) {
            const number = Number(cadeira)
            let Valid = Number.isInteger(number)
            if (Valid && number > 0) {
                return true;
            }
        }
        return false;
=======
        sala >= 1 && sala <= 10
    }

    static validaAssento(assento) {

>>>>>>> develop
    }

    static validaDataHora(dataHora) {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
        return regex.test(dataHora)
    }   

    static validaPrecoIngresso(precoIngresso) {
<<<<<<< HEAD
        return parseFloat(precoIngresso)
=======
        precoIngresso === Boolean ? precoIngresso : Error
>>>>>>> develop
    }

    static validaCodigoDeBarra(codigoDeBarra) {
        return codigoDeBarra.length = 12
    }
}