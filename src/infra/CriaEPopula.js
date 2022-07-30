import CombosMetodos from "../DAO/CombosMetodos.js";

const combos = {
    name: "",
    price: "",
    item1: "", 
    item2: "", 
    item3: ""
}
    try {
        const criaCombos = await CombosMetodos.createTableCombos()
        console.log(criaCombos)

        const addNovoCombo = await CombosMetodos.adicaoNovosCombos(combos)
        console.log(addNovoCombo)

    } catch(e) {
        console.log(e)

    }
