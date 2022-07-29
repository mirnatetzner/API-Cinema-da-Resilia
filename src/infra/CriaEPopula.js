import DatabaseMetodos from "../DAO/DatabaseSalaMetodos.js";

const Sala ={
   
    id: 1 ,
    dimensão: "3D",
    capacidade: 150,
    lucratividade: 150.00,
    exibicoes: ["2022-07-15 12:12:12"]
}

try {

    const tabela = await DatabaseMetodos.createTableSala()
    console.log(tabela)

    const criada = await DatabaseMetodos.inserirSala(Sala)
    console.log(criada)

} catch (e) {
    console.log(e)
}