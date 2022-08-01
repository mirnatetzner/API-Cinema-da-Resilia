import CombosMetodos from "../DAO/CombosMetodos.js"
// import CombosModels from "../models/CombosModels.js"
import CombosDatabase from "../infra/CombosDatabase.js"

class Combos{
    static combos(app){
        app.get("/combos", (req, res) => {
            const response = CombosMetodos.listarCombos(req)
            res.status(200).json(response)
        })

        app.get("/combos/id:", async (req, res) => {
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

        app.get("/combos/name:", async (req, res) => {
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
    }

}

export default Combos