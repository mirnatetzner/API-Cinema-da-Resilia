import Salas from "../controllers/Sala.js";
import ValidacoesService from "./ValidacoesService.js";

class ValidacoesSala extends ValidacoesService {
 
    /**
     * 
     * @param {number} cComum 
     * @returns boolean 
     */
    static validaCadeira(num) {
        if (!num === Boolean) {
            num = Number(num)  
            let Valid = Number.isInteger(num)
            if (Valid && num > 0) {
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
    static validaCertificadoDeVistoriaAnual(certificado) {
            if (typeof certificado != "boolean") {
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
    static validaCategoriaDaSala(tipo) {
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
        return this.validaCadeira(cComum) && this.validaCadeira(cNamo) && this.validaCadeira(cAcess) && this.validaCertificadoDeVistoriaAnual(certificado) && this.validaCategoriaDaSala(tipo);
    }
}

export default ValidacoesSala