import ValidacoesService from "./ValidacoesService.js";

class ValidacoesSala extends ValidacoesService {
    /**
     * 
     * @param {number} cComum 
     * @returns boolean 
     */
    static validaCadeiras_comuns(cComum) {
        if (!cComum === Boolean) {
            cComum = Number(cComum)  
            let Valid = Number.isInteger(cComum)
            if (Valid && cComum > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * 
     * @param {number} cComum 
     * @returns boolean 
     */
    static validaCadeiras_namoradeiras(cNamo) {
        if (!cNamo === Boolean) {
            cNamo = Number(cNamo)  
            let Valid = Number.isInteger(cNamo)
            if (Valid && cNamo > 0) {
                return true;
            }
        }
        return false;
    }
     /**
     * 
    * @param {number} cComum 
    * @returns boolean 
    */
    static validaEspaços_cadeirantes(cAcess) {
        if (!cAcess === Boolean) {
            cAcess = Number(cAcess)  
            let Valid = Number.isInteger(cAcess)
            if (Valid && cAcess > 0) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param {boolean} cetificado 
     * @returns boolean
     */
    static validaCertificado_de_vistoria_anual(certificado) {
            if (certificado != 1 && 0) {
                return false
            } else{
                return true
            }
    }

    /**
     * 
     * @param {string} tipo
     * @returns boolean 
     */
    static validaCategoria_da_sala(tipo) {
        tipo = tipo.toLowerCase()
        switch (tipo) {
            case 'imax':
            case 'xd':
            case '4dx':
            case 'macro xe':
            case 'xplus': 
            case 'reald':
            case 'd-box':
                return true
                break;
            default:
                console.log("Você deve escolher uma das opções: imax, xd, macro xe, 4dx, xplus, reald ou d-box (certifique-se de escrever como no exemplo).")
                return false
      } 
    }

/**
 * 
 * @param {number} cComum 
 * @param {number} cNamo 
 * @param {number} cAcess 
 * @param {boolean} certificado 
 * @param {string} tipo 
 * @returns boolean
 */
    static isValid(cComum, cNamo, cAcess, certificado, tipo) {
        return this.validaCadeiras_comuns(cComum) && this.validaCadeiras_namoradeiras(cNamo) && this.validaEspaços_cadeirantes(cAcess) && this.validaCertificado_de_vistoria_anual(certificado) && this.validaCategoria_da_sala(tipo);
    }
}

export default ValidacoesSala