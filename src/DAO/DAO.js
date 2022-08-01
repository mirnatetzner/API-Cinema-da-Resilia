import FilmesDatabase from "../infra/FilmesDatabase";

class DAO{
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        FilmesDatabase.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras ativas")
            }
        })
    }

    

}

export default DAO