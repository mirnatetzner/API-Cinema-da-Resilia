import FilmesModels from "../models/FilmesModel.js"
import FilmesMetodos from "../DAO/FilmesMetodos.js"
// import FilmesDatabase from "../infra/FilmesDatabase.js"
// import DAO from "../DAO/DAO.js"


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
            try {
                const filme = await FilmesMetodos.listarFilmePorId(req.params.id)
                if(!filme){
                    throw new Error("Filme não encontrado para o id")
                }
                res.status(200).json(filme)
            } catch (error) {
                res.status(404).json(error.message)
                
            }
        })

        app.post("/filmes", async (req, res) => {
            try {
                const filme = new FilmesModels(...Object.values(req.body))
                const response = await  FilmesMetodos.inserirFilme(filme)
                res.status(201).json(response)
                
            } catch (error) {
                res.status(400).json(error.message)
                console.log(error.message)
            }

        })

        app.put("/filmes/:id", (req, res)=> {
            try {
                const filme = new FilmesModels(...Object.values(req.body))
                const response = FilmesMetodos.atualizaPorId(req.params.id, filme)
                res.status(201).json(response)
                
            } catch (error) {
                
                res.status(400).json({Erro:"Erro"})
            }

        })

        app.delete("/filmes/:id", async (req, res) => {
            try {                
                const filme = await FilmesMetodos.deletaFilmePorId(req.params.id)
                if(!filme){
                    throw new Error("Filme não encontrado")
                }
                res.status(200).json(filme)
            } catch (error) {    
                res.status(404).json({Error: error.message})
            }
                        
        })

    }

   }

export default Filmes