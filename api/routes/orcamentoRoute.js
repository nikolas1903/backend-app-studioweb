'use strict'
module.exports = function(app){
    var orcamentoController = require('../controllers/orcamentoController')

    app.route('/orcamento')
    .get(orcamentoController.lista_todos_orcamentos)
    .post(orcamentoController.adiciona_um_orcamento)

    app.route('/orcamento/:orcamentoId')
    .get(orcamentoController.lista_um_orcamentos)
    .put(orcamentoController.atualiza_um_orcamento)
    .delete(orcamentoController.remove_um_orcamento)
}