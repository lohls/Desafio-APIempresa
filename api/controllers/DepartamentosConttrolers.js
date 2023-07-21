const departamentos = require('../models/departamentos.js')
const DepartamentoServices = require('../services/departamentoServices.js')
const departamentoServices = new DepartamentoServices()

class DepartamentoController {

    static async cadastraDepartamento(req, res) {
        const newDados = req.body

        try {
            const departamentos = await departamentoServices.cadastraRegistro(newDados)
            res.status(201).json(departamentos)

        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)

        }

    }
    static async pegaTodosOsDepartamento(req, res) {
        try {
            const departamentos = await departamentoServices.pegaTodosOsDepartamentosComFuncionarios()
            res.status(200).json(departamentos)

        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)

        }
    }

    static async pegaDepartamentoPorId(req, res) {

        const { id } = req.params

        try {
            const departamentos = await departamentoServices.pegaDepartamentoDoFuncionario(id)
            res.status(200).json(departamentos)

        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)

        }
    }


    static async atualizaDepartamento(req, res) {

        const newDados = req.body
        const { id } = req.params
        try {
            const departamentos = await departamentoServices.atualizaRegistro(newDados, id)
            res.status(200).json()

        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)

        }


    }

    static async deletaDepartamento(req, res) {

        const { id } = req.params
        try {
            await departamentoServices.deletaRegistro(id)
            res.status(200).json('Departamento deletado com sucesso!')
        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)


        }
    }

}

module.exports = DepartamentoController