const database = require('../models')
class Services {
    constructor(modelo) {
        this.modelo = modelo
    }

    async cadastraRegistro(dados) {
        return database[this.modelo].create(dados)
    }

    async pegarTodosOsRegistros() {
        return database[this.modelo].findAll()
    }

    async pegarRegistroPorId(id) {
        return database[this.modelo].findOne({
            where: {
                id: id
            }
        })
    }

    async atualizaRegistro(novosDados, id) {
        return database[this.module].update(novosDados, id)
    }

    async deletaRegistro(id) {
        return database[this.modelo].destroy({ where: { id: id } })
    }


}

module.exports = Services