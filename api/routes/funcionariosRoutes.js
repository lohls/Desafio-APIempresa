const {Router} = require('express')
const FuncionariosControllers = require('../controllers/FuncionariosConttrolers')

const router = Router()

router.post('/funcionarios', FuncionariosControllers.cadastraFuncionario)
router.get('/funcionarios', FuncionariosControllers.PegaTodosOsFuncionarios)
router.get('/funcionarios/:id', FuncionariosControllers.pegaTodosOsFuncionariosPorId)
router.put('/funcionarios/:id', FuncionariosControllers.atualizaFuncionarios)
router.delete('/funcionarios/:id', FuncionariosControllers.deletaFuncionarios)

module.exports = router