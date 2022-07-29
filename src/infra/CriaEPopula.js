import DatabaseMetodos from "../DAO/DatabaseSalaMetodos.js";

const Sala ={
    /*    
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dimensao VARCHAR,
        capacidade INTEGER,
        lucratividade DECIMAL(10, 2),
        exibicoes SMALLDATETIME
 */
    id: "",
    dimensão: "3D",
    capacidade: 150,
    lucratividade: 150.00,
    exibicoes: "15/07/2022 12:12:12"
}

try {

    const tabela = await DatabaseMetodos.createTableUsuarios()
    console.log(tabela)

    const criada = await DatabaseMetodos.inserirUsuario(usuario)
    console.log(criada)

} catch (e) {
    console.log(e)
}