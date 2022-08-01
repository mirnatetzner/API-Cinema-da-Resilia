import FilmesModels from "../Models/FilmesModel.js"
import FilmesMetodos from "../DAO/FilmesMetodos.js"
import FilmesDatabase from "../infra/FilmesDatabase.js"


class Filmes{
    /**
     * 
     * @param {*} app 
     * 
     */
    static rotas(app){
        app.get("/filmes", async (req, res) => {
            const response = await FilmesMetodos.listarTodosFilmes()
            res.status(200).json(response)
        })

        app.get("/filmes/:id", async (req, res) => {
            const response = await FilmesMetodos.listarFilmePorId(req.params.id)
            res.status(200).json(response)
        })

        app.post("/filmes", async (req, res) => {
            const filme = new FilmesModels(...Object.values(req.body))
            const response = await FilmesMetodos.novoFilme(filme)
            res.status(201).json(response)
        })

        // app.put("/filmes/:id", (req, res) => {
        //     const filme = new FilmesModels(...Object.values(req.body))
        //     const response = await FilmesMetodos.atualizarPorId(filme)
        //     res.status(201).json(response)
        // })

        app.patch("filmes/:id", async (req, res) => {
            const filme = await FilmesMetodos.atualizarPropriedadesPorId(req.params.id, req.bpdy)
            res.status(200).json(response)
        })

    }

   }

export default Filmes