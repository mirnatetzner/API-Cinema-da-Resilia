import CombosDatabase from "./CombosDatabase.js";

const combos = {
    name: "",
    price: "",
    item1: "", 
    item2: "", 
    item3: ""
}
try {
    const criaCombos = await CombosDatabase.createTableCombos()
    console.log(criaCombos)

    const addNovoCombo = await CombosDatabase.adicaoNovosCombos()
    console.log(addNovoCombo)

} catch(e) {
    console.log(e)

}
