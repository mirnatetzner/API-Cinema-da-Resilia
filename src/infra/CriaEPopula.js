import DatabaseMetodos from "../DAO/DatabaseSalaMetodos.js";

const Sala ={
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
