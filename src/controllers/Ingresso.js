// import IngressoModel from '../models/IngressoModel'
import ValidacoesIngresso from "../services/ValidacoesIngresso"
import DatabaseMetodos from "../DAO/IngressoDAO"

class Ingresso {
    static rotas(app) {
        app.get('/ingresso/:id', (req, res) => {
            try {
                const ingresso = DatabaseMetodos.obterIngressoPeloID(req.params.id)
                res.status(200).json(ingresso)
            } catch(erro) {
                res.status(500).json(erro.message)
            } 
        })
            
        app.post('/ingresso/id', (req, res) => {
            create = async (ingresso, res) => {
                try {
                    const result = await IngressoDAO.criarIngresso(ingresso)
                    res.status(201).json({ msg: result })
                } catch (error) {
                    res.status(500).json({ erro: error })
                }
            }
        })

        app.patch('/ingresso/id', (req, res) => {
            const id = req.params.id
            const ingresso = req.body

            try {
                const ingresso = await ingressoDAO.obterIngressoPeloID(id)

                if (ingresso) {
                    const result = await ingressoDAO.atualizarIngresso(id, ingresso)
                    res.status(200).json({ msg: result })
                } else {
                    res.status(404).json({msg: 'ingresso não encontrado.'})
                }
            } catch (error) {
                res.status(500).json({ erro: error })
            }
            })

        app.delete('/ingresso/id', (req, res) => {
            
        })
    }
}

export default Ingresso