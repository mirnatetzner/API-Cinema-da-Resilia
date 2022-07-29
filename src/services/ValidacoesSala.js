import ValidacoesService from "./ValidacoesService.js";

class ValidacoesSala extends ValidacoesService{

    static validaCadeiras_comuns(){

    }
    static validaCadeiras_namoradeiras(){

    }
    static validaEspaços_cadeirantes(){

    }
    /**
     * 
     * @param {boolean} cetificado 
     * @returns boolean
     */
    static validaCertificado_de_vistoria_anual(certificado){
        if(certificado != 1 || 0){
            return false
        }
    } 

    static validaCategoria_da_sala(tipo){
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
    static isValid(id, cadeiras_comuns, cadeiras_namoradeiras, espaços_cadeirantes, certificado_de_vistoria_anual, categoria_da_sala){
        return this.validaDimensao() && this.validaCapacidade(telefone) && this.validaLucratividade() && this.validaExibicoes()
    }
    
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