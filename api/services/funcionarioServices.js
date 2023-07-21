const Services = require("./services");
const database = require('../models')

class FuncionarioServices extends Services {
    constructor() {
        super('funcionarios')
    }


}

module.exports = FuncionarioServices