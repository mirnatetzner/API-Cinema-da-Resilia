import CombosMetodos from "../DAO/CombosMetodos.js";
import DatabaseSalaMetodos from "../DAO/DatabaseSalaMetodos.js";
import DAO from "../DAO/DAO.js";

const combos = {
    name: "MEGA",
    price: "30.00",
    item1: "Pipoca Mega", 
    item2: "Coca-Cola 400ml", 
    item3: "Mentos"
}
    try {
        const criaCombos = await CombosMetodos.createTableCombos()
        console.log(criaCombos)

        const addNovoCombo = await CombosMetodos.adicaoNovosCombos(combos)
        console.log(addNovoCombo)

    } catch(e) {
        console.log(e)
    }

const sala = {
    cadeiras_comuns: 250,
    cadeiras_namoradeiras: 6,
    espaços_cadeirantes: 4,
    certificado_de_vistoria_anual: true,
    categoria_da_sala: "imax"
}

try {
    await DAO.ativaChavesEstrangeiras()

    const Sala = await DatabaseSalaMetodos.createTableSala()
    console.log(Sala, ">>>>>> Sala")

    const salaCriada = await DatabaseSalaMetodos.inserirSala(sala)
    console.log(salaCriada, ">>>>>> Sala")

} catch (e) {
    console.log("erro >>>>>>", e)
}
