import ValidacoesService from "./ValidacoesService.js"

class ValidacoesIngresso extends ValidacoesService {
    static validaFilme(filme) {
        return filme.length >= 2
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
     * @param {number} precoIngresso 
     * @returns boolean
     */
    static validaPrecoIngresso(precoIngresso) {
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
      static isValid(filme, sala, cadeira, precoIngresso){
        return this.validaFilme(filme) 
        && this.validaSala(sala) 
        && this.validaCadeira(cadeira) 
        && this.validaPrecoIngresso(precoIngresso)
    }

}
export default ValidacoesIngresso