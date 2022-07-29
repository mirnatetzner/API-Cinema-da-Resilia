import { CombosDatabase } from "../infra/CombosDatabase.js"

class CombosMetodos {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        CombosDatabase.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras ativas")
            }
        })
    }
}

export default CombosMetodos

