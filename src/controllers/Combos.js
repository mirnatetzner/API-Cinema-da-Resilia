import CombosMetodos from "../DAO/CombosMetodos.js"
import CombosModels from "../models/CombosModels.js"

class Combos{
    /**
     * 
     * @param {*} app 
     * 
     */
    static combos(app){
        app.get("/combos", (req, res) => {
            const response = CombosMetodos.listarCombos(req)
            res.status(200).json(response)
        })
    }
}

export default Combos