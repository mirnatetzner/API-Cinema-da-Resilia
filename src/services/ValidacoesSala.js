import ValidacoesService from "./ValidacoesService.js";

class ValidacoesSala extends ValidacoesService {

    static validaCadeiras_comuns(cComum) {
        if (!cComum === Boolean) {
            cComum = Number(cComum)
            console.log(cComum);
            let Valid = Number.isInteger(cComum)
            console.log(Valid);
            if (Valid && cComum > 0) {
                return true;
            }
        }
        return false;
    }

    static validaCadeiras_namoradeiras(cNamo) {
        Number(cNamo)
        if ( == NaN) {
            return false;
        }
        if (Number.isInteger())
    }
    static validaEspaços_cadeirantes(cAcess) {
        Number(cAcess)
        if ( == NaN) {
            return false;
        }
        if (Number.isInteger())
    }

    /**
     * 
     * @param {boolean} cetificado 
     * @returns boolean
     */
    static validaCertificado_de_vistoria_anual(certificado) {
        if (certificado != 1 || 0) {
            return false
        }
    }

    /**
     * 
     * @param {string} tipo
     * @returns boolean 
     */
    static validaCategoria_da_sala(tipo) {
        switch (tipo) {
            case 'imax':
            case 'xd':
            case '4dx':
            case 'macro xe':
            case 'xplus':
            case 'reald':
            case 'd-box':
                true
                break;
            default:
                console.log(`Você deve escolher uma das opções: imax, xd, macro xe, 4dx, xplus, reald e d-box (certifique-se de escrever como no exemplo). `);
        }
    }


    /**
     * 
     * @param {}  
     * @param {} 
     * @param {}  
     * @returns boolean
     */
    static isValid(id, cadeiras_comuns, cadeiras_namoradeiras, espaços_cadeirantes, certificado_de_vistoria_anual, categoria_da_sala) {
        return this.validaCadeiras_comuns() && this.validaCadeiras_namoradeiras() && this.validaEspaços_cadeirantes() && this.validaCertificado_de_vistoria_anual(certificado) && this.validaCategoria_da_sala(tipo) {}

    }

    /*  static validaLucratividade(valor){
         let RegExp = /[,|.|\$|R]/g 
         let valorClean = valor.replaceAll(RegExp,"")
         valorfloat = parseFloat(valorClean)
         if(valorfloat != Number){
             return false
         }
             return true
     }


     static validaExibicoes(){
         return 
     }
      */

    export default ValidacoesSala