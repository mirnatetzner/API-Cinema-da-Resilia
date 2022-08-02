import express from "express";
import * as dotenv from "dotenv";
import Combos from "./src/controllers/Combos.js"
import Filmes from "./src/controllers/Filmes.js"
import FilmesMetodos from "./src/DAO/FilmesMetodos.js";

dotenv.config()

const port = process.env.PORT || 3002;
const app = express()


/**
 * verificação de servidor online
 */
app.listen(port, () => {
    console.log(`servidor online em http://localhost:${port}`)
})

app.use(express.json())


FilmesMetodos.createTable()
Filmes.rotas(app)
Combos.combos(app)
