import FilmesMetodos from "../DAO/FilmesMetodos.js";
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