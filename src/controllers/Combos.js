import CombosMetodos from "../DAO/CombosMetodos.js"
import DAO from "../DAO/DAO.js"
import CombosModels from "../models/CombosModels.js"
import ValidacoesCombos from "../services/ValidacoesCombos.js"
import Database from "../infra/Database.js"

class Combos extends DAO{
    static combos(app){
        app.get("/combos", async(req, res) => {
            const response =  await CombosMetodos.listarCombos(req)
            res.status(200).json(response)
        })

        app.get("/combos/id/:id", async (req, res) => {
            try {
                const combos = await CombosMetodos.listarCombosId(req.params.id)
                if(!combos){
                    throw new Error("Esse Id não corresponde a um Combo na listagem")
                }
                res.status(200).json(combos)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.get("/combos/name/:name", async (req, res) => {
            try {
                const combos = await CombosMetodos.listarCombosNome(req.params.name)
                if(!combos){
                    throw new Error("Não há um combo na listagem com esse nome")
                }
                res.status(200).json(combos)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.post("/combos", async (req, res) => {
            try{
                const combos = new CombosModels(...Object.values(req.body))
                const response = await CombosMetodos.inserirCombos(combos)
                res.status(201).json(response)
            } catch (error) {
                throw new Error ("Não foi possível adicionar novo combo") 
            }
        })

        app.put("/combos/:id", (req, res)=> {
            try{
                const combo = new CombosModels(...Object.values(req.body))
                const response = CombosMetodos.attCombosPorId(req.params.id, combo)
                res.status(201).json(response)
            } catch (error) {
                res.status(400).json({Erro:"Erro ao adicionar combo"})
            }
        })

        app.delete("/combos/:id", (req, res) => {
            try{
                const comboDel = await CombosMetodos.deletarCombosPorId(req.params.id)
                if(!comboDel) {
                    throw new  Error ("Combo não encontrado :/ ")
                } res.status(200).json(comboDel)
            } catch (error) {
                res.status(404).json({Error: error.message})
            }
            
        })
        
    }
}

export default Combos