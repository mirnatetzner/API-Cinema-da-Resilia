import FilmesMetodos from "../DAO/FilmesMetodos.js";
import CombosMetodos from "../DAO/CombosMetodos.js";
import DatabaseSalaMetodos from "../DAO/DatabaseSalaMetodos.js";
import DAO from "../DAO/DAO.js";

const filme ={
    nome: "Nome do filme",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse"
}

const combos = {
    name: "MEGA",
    price: 30.00,
    item1: "Pipoca Mega", 
    item2: "Coca-Cola 400ml", 
    item3: "Mentos"
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

    const criaCombos = await CombosMetodos.createTableCombos()
    console.log(criaCombos)
    const addNovoCombo = await CombosMetodos.inserirCom(combos)
    console.log(addNovoCombo)

    const filmes = await FilmesMetodos.createTableFilmes()
    console.log(filmes, ">>>>>> Filmes")
    const filmeCriado = await FilmesMetodos.novoFilme()
    console.log(filmeCriado, ">>>>>> Filme Inserido")
    const inserirFilme = await FilmesMetodos.novoFilme(filme)
    console.log(inserirFilme, ">>>>>> Filme Inserido")

} catch (e) {
    console.log("erro >>>>>>", e)
}
