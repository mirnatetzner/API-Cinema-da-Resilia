import DatabaseMetodos from "../DAO/DatabaseSalaMetodos.js";

const Sala ={
    id: 1,
    cadeiras_comuns: 
    cadeiras_namoradeiras: 
    espaços_cadeirantes: 
    certificado_de_vistoria_anual: 
    categoria_da_sala:

}

try {

    const tabela = await DatabaseMetodos.createTableSala()
    console.log(tabela)

    const criada = await DatabaseMetodos.inserirSala(Sala)
    console.log(criada)

} catch (e) {
    console.log(e)
}