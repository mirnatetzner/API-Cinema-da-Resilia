import FilmesMetodos from "../DAO/FilmesMetodos.js";
import DAO from "../DAO/DAO.js";

const filme ={
            nome: "Jurassic World: Domínio",
            genero: "Ação |  Aventura | Ficção Científica",
            duracao: "02:26",
            anoLancamento: "2022",
            diretor: "Colin Trevorrow",
            sinopse: "Em Jurassic World Domínio, sequência direta do longa de 2018, – Jurassic World: Reino Ameaçado – os dinossauros agora circulam livres pelo mundo humano após os acontecimentos recentes. Alguns conseguem coexistir de forma pacífica em sociedade, todavia, outros trazem problemas. Os ex-funcionários do parque dos dinossauros, Claire Bryce Dallas Howard e Owen Chris Pratt se envolvem nessa problemática e buscam uma solução, contando com a ajuda dos cientistas experientes em dinossauros, que retornam dos filmes antecessores. Capítulo final da trilogia iniciada por Jurassic World – O Mundo dos Dinossauros"
}

try{
    await DAO.activePragma()

    const filmes = await FilmesMetodos.createTableFilmes()
    console.log(filmes, ">>>>>> Filmes")

    const filmeCriado = await FilmesMetodos.novoFilme()
    console.log(filmeCriado, ">>>>>> Filme Inserido")
}catch{
    console.log("erro >>>>>>", e)
}