const funcionarios = require('../models/funcionarios.js')
const FuncionarioServices = require('../services/funcionarioServices.js')
const funcionariosServices = new FuncionarioServices()

class FuncionariosControllers {

    static async cadastraFuncionario(req, res) {
        const newDados = req.body
        try {
            const funcionarios = await funcionariosServices.cadastraRegistro(newDados)
            res.status(201).json(funcionarios)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async PegaTodosOsFuncionarios(req, res) {

        try {
            const funcionarios = await funcionariosServices.pegarTodosOsRegistros()
            res.status(201).json(funcionarios)

        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)
        }

    }

    static async pegaTodosOsFuncionariosPorId(req, res) {
        const { id } = req.params

        try {
            const funcionarios = await funcionariosServices.pegarRegistroPorId(id)
            res.status(201).json(funcionarios)

        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)
        }
    }

    static async atualizaFuncionarios(req, res) {
        const newDados = req.body
        const id = req.params
        try {
            const funcionarios = await funcionariosServices.atualizaRegistro(newDados, id)
            res.status(201).json(funcionarios)
        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)
        }
    }

    static async deletaFuncionarios(req, res) {
        const {id} = req.params
        try {
            await funcionariosServices.deletaRegistro(id)
            res.status(200).json('Funcionario deletado com sucesso!')
        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)
        }
    }
}


module.exports = FuncionariosControllers;

