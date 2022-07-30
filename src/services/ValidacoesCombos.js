export default class ValidacoesCombos {
    /**
     * 
     * @param {String} name 
     * @returns Object
     */
    static validaName(name){
        return name.lenght >= 4
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

    /**
     * @param {String} item1
     * @param {String} item2
     * @param {String} item3
     * @returns Object
     */
    static validaItens(){
        return this.validaItem1(item1, item2, item3) 
            && this.validaItem2(item1, item2, item3) 
            && this.validaItem3(item1, item2, item3)
    }
}