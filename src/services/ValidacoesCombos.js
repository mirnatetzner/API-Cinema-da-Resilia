export default class ValidacoesCombos {
    /**
     * 
     * @param {String} name 
     * @returns Object
     */
    static validaName(name){                                   
        const nomeCombo = name.toUpperCase()
        if (nomeCombo.length >= 4 && nomeCombo.length <= 12){
            return nomeCombo
        } 
    }

    /**
     * 
     * @param {String} item1 
     * @param {String} item2 
     * @param {String} item3 
     * @returns Object
     */
    static validaItens(...itens){
        const itensOriginais = [...itens]
        const itensFilter = [... new Set (itensOriginais)]
        return itensOriginais.length == itensFilter.length
    }

    static validaPreco(price) {
        if (price.length <=60.00 || price.length >=15.00) {
            return price
        }
    }

    /**
     * @param {String} item1
     * @param {String} item2
     * @param {String} item3
     * @returns Object
     */
    static validaCombos(){
        return this.validaName(name)
            && this.validaPreco(price)
            && this.validaItem1(item1, item2, item3) 
            && this.validaItem2(item1, item2, item3) 
            && this.validaItem3(item1, item2, item3)
    }
}