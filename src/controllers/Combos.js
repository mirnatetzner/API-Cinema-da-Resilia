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
            const validCombo = ValidacoesCombos.validaCombos(...Object.values(req.body))

            try{
                if(validCombo){
                    const combos = new CombosModels(...Object.values(req.body))
                    const response = await CombosMetodos.inserirCombos(combos)
                    res.status(201).json(response)
                } else {
                    throw new Error ("Não foi possível adicionar novo combo") 
                }
            } catch (e) {
                res.status(400)
            }
        })

        app.put("/combos/:id", (req, res)=> {
            const validCombo = ValidacoesCombos.validaCombo(...Object.values(req.body))

            if(validCombo){
                const combo = new CombosModels(...Object.values(req.body))
                const response = DAO.atualizarPorId(req.params.id, combo)
                res.status(201).json(response)
            } else {
                res.status(400).json({Erro:"Erro"})
            }
        })

        app.delete("/combos/:id", (req, res) => {
            if(ValidacoesCombos.validaCombos(req.params.id, Database.Combos)){
                const usuario = DAO.deletaPorId(req.params.id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Combo não encontrado"})
            }
        })
    }

}

export default Combos