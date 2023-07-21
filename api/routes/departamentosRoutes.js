const {Router} = require('express')
const DepartamentoController = require('../controllers/DepartamentosConttrolers.js')

const router = Router()

router.post('/departamentos', DepartamentoController.cadastraDepartamento)
router.get('/departamentos', DepartamentoController.pegaTodosOsDepartamento)
router.get('/departamentos/:id', DepartamentoController.pegaDepartamentoPorId)
router.put('/departamentos/:id', DepartamentoController.atualizaDepartamento)
router.delete('/departamentos/:id', DepartamentoController.deletaDepartamento)

module.exports = router