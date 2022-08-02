import FilmesMetodos from "../DAO/FilmesMetodos.js";
import CombosMetodos from "../DAO/CombosMetodos.js";
import DAO from "../DAO/DAO.js";

const filme ={
            nome: "Nome do filme",
            genero: "Gênero do Filme",
            duracao: "2hrs",
            anoLancamento: "2022",
            diretor: "Teste Diretor",
            sinopse: "Teste Sinopse"
}

try{
    await DAO.activePragma()

    const filmes = await FilmesMetodos.createTableFilmes()
    console.log(filmes, ">>>>>> Filmes")

    const filmeCriado = await FilmesMetodos.novoFilme()
    console.log(filmeCriado, ">>>>>> Filme Inserido")

    const inserirFilme = await FilmesMetodos.novoFilme(filme)
    console.log(inserirFilme, ">>>>>> Filme Inserido")
}catch(e){
    console.log(e.messsage)
}

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
