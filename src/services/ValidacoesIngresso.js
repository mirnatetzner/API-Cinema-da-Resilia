import ValidacoesService from "./ValidacoesService.js";
export default class ValidacoesIngresso {

    /**
     * @param {string} filme 
     * @returns boolean
     */
    static validaFilme(filme) {
        return filme >= 2
    }

    /**
     * @param {number} sala 
     * @returns boolean
     */
    static validaSala(sala) {
        return sala >= 1
    }

    /**
     * @param {number} cadeira 
     * @returns boolean
     */
    static validaCadeira(cadeira) {
        return ValidacoesService.validaNumerosInteiros(cadeira);
    }

    /**
     * @param {string} dataHora 
     * @returns boolean
     */
    static validaDataHora(dataHora) {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
        return regex.test(dataHora)
    }   

    /**
     * @param {number} precoIngresso 
     * @returns boolean
     */
    static validaPrecoIngresso(precoIngresso) {
        const preco = parseInt(precoIngresso)
        return preco == precoIngresso
    }

     /**
     * 
     * @param {string} filme 
     * @param {number} sala 
     * @param {number} cadeira 
     * @param {string} dataHora 
     * @param {number} precoIngresso 
     * @returns boolean
     */
      static isValid(filme, sala, cadeira, dataHora, precoIngresso){
        return this.validaFilme(filme) && this.validaSala(sala) && this.validaCadeira(cadeira) && this.validaDataHora(dataHora) && this.validaPrecoIngresso(precoIngresso)
    }
}