import express from "express";
import * as dotenv from "dotenv"
import Sala from "./src/controllers/Sala.js"
import Salas from "./src/controllers/Sala.js";

dotenv.config()

const port =  process.env.PORT || 3000;

const app = express()

app.listen(port, ()=>{
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json())

Salas.rotas(app)