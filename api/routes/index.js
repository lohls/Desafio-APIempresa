const bodyParser = require('body-parser');
const departamento = require('./departamentosRoutes.js')
const funcionario = require('./funcionariosRoutes.js')

module.exports = app => {
    app.use(bodyParser.json(), 
    
    departamento,
    funcionario
    
    )
}


