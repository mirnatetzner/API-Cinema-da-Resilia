import ValidacoesService from "./ValidacoesService.js";
class ValidacoesIngresso extends ValidacoesService {
    static validaFilme(filme) {
        return filme >= 2
    }

    static validaSala(sala) {
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
    }

    static validaDataHora(dataHora) {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
        return regex.test(dataHora)
    }   

    static validaPrecoIngresso(precoIngresso) {
        return parseFloat(precoIngresso)
    }

    static validaCodigoDeBarra(codigoDeBarra){
        let valido = this.validaNumerosInteiros(codigoDeBarra)
        if(valido){
            return codigoDeBarra.length = 12;
        }
        return false;
    }

}
export default ValidacoesIngresso