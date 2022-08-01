export default class ValidacoesCombos {
    /**
     * 
     * @param {String} name 
     * @returns Object
     */
    static validaName(name){
        nomeCombo = name.toUpperCase()
        if (nomeCombo.length >= 4 && nomeCombo.length <= 12){
            return nomeCombo
        } else {
            return "Nome de combo inválido"
        }
    }

    /**
     * 
     * @param {String} item1 
     * @param {String} item2 
     * @param {String} item3 
     * @returns Object
     */
    static validaItem1(item1, item2, item3){
        return item1 != item2 && item1 !=item3
    }
    static validaItem2(item1, item2, item3){
        return item2 != item1 && item2 !=item3
    }
    static valideItem3(item1, item2, item3){
        return item3 != item2 && item3 !=item1
    }

    static validaPreco(price) {
        return price <= 50.00
    }

    /**
     * @param {String} item1
     * @param {String} item2
     * @param {String} item3
     * @returns Object
     */
    static validaItens(){
        return this.validaName(name)
            && this.validaPreco(price)
            && this.validaItem1(item1, item2, item3) 
            && this.validaItem2(item1, item2, item3) 
            && this.validaItem3(item1, item2, item3)
    }
}