import FilmesMetodos from "../DAO/FilmesMetodos.js";
import CombosMetodos from "../DAO/CombosMetodos.js";
import DatabaseSalaMetodos from "../DAO/DatabaseSalaMetodos.js";
import IngressoMetodos from "../DAO/IngressoMetodos.js"
import DAO from "../DAO/DAO.js";

const filme =[{
    nome: "Titanic",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://images.mubicdn.net/images/film/249347/cache-486799-1632487706/image-w1280.jpg?size=800x'
},

{
    nome: "As branquelas",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2072",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://assets.mubicdn.net/images/film/225137/image-w1280.jpg?1573848004'
},
{
    nome: "Todo mundo em pânico",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://assets.mubicdn.net/images/film/269690/image-w1280.jpg?1591442924'
},
{
    nome: "xena a princesa guerreira",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://www.planoaberto.com.br/wp-content/uploads/2022/01/fabian-capa.jpg'
},
{
    nome: "Dona flor e seus 3 maridos",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://f.i.uol.com.br/fotografia/2021/12/15/163957688461b9f53424c8e_1639576884_3x2_md.jpg'
},
{
    nome: "Dona flor e seus 3 maridos",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://revistadecinema.com.br/wp-content/uploads/2022/03/IMG_5097-800x445.jpg'
},
{
    nome: "E x man",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2022",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://i.ytimg.com/vi/f07LzRWLhho/maxresdefault.jpg'
},
{
    nome: "Casa de Cera",
    genero: "Gênero do Filme",
    duracao: "2hrs",
    anoLancamento: "2302",
    diretor: "Teste Diretor",
    sinopse: "Teste Sinopse",
    image: 'https://media.filmelier.com/tit/2rMd8t/thumb/vitalina-varela_TevgDdI.jpeg'
}
]

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

const ingresso = {
    filme: 'Nome do filme', 
    sala: 1, 
    cadeira: 250, 
    dataHora: '12/06/2022 20:00', 
    precoIngresso: 40.00
}

try {
    await DAO.ativaChavesEstrangeiras()

    const Sala = await DatabaseSalaMetodos.createTableSala()
    console.log(Sala, ">>>>>> Sala")
    const salaCriada = await DatabaseSalaMetodos.inserirSala(sala)
    console.log(salaCriada, ">>>>>> Sala")

    const criaCombos = await CombosMetodos.createTableCombos()
    console.log(criaCombos, ">>>>>> Combos")
    const addNovoCombo = await CombosMetodos.inserirCombos(combos)
    console.log(addNovoCombo, ">>>>>> Combos")

    const filmes = await FilmesMetodos.createTableFilmes()
    console.log(filmes, ">>>>>> Filmes")
    filme.forEach( async filme=>{ 
        const inserirFilme = await FilmesMetodos.inserirFilme(filme)
        console.log(inserirFilme, ">>>>>> Filme Inserido")
    })
    const criaIngresso = await IngressoMetodos.createTableIngresso()
    console.log(criaIngresso, ">>>>>> Ingresso")
    
    const AdicionaNovoIngresso = await IngressoMetodos.inserirIngresso(ingresso)
    console.log(AdicionaNovoIngresso, ">>>>>> Ingresso")

} catch (e) {
    console.log(e, "erro >>>>>>")
}
