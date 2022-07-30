import CombosModels from "../models/CombosModels.js"

class Combos{
    /**
     * 
     * @param {*} app 
     * 
     */
    static combos(app){
        app.get("/combos", (req, res) => {
            const response = 
            res.status(200).json(response)
        })
    }
}

export default Combos