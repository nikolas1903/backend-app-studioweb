'use strict'
var mongoose = require('mongoose')
var orcamento = mongoose.model('orcamento')


// GET ALL
exports.lista_todos_orcamentos = function (req, res) {
    orcamento.find({}, function (err, orcamentos) {
        if (err) {
            res.send(err)
        }
        res.json(orcamentos)
    })
}

// GET ID
exports.lista_um_orcamentos = function (req, res) {
    orcamento.findOne({ "_id": req.params.orcamentoId }, function (err, orcamento) {
        if (err) {
            res.send(err)
        }
        res.json(orcamento)
    })
}

// POST
exports.adiciona_um_orcamento = function (req, res) {
    var novo_orcamento = new orcamento(req.body)
    novo_orcamento.save(function (err, orcamento) {
        if (err) {
            res.send(err)
        }
        res.json(orcamento)
    })
}

// PUT
exports.atualiza_um_orcamento = function (req, res) {
    livro.findOneAndUpdate({ _id: req.params.orcamentoId }, req.body, { new: true },
        function (err, orcamento) {
            if (err) {
                res.send(err)
            }
            res.json(orcamento)
        })
}

// DELETE
exports.remove_um_orcamento = function(req, res) {
    livro.remove({ _id: req.params.orcamentoId }, function(err, orcamento) {
        if(err) {
            res.send(err)
        }
        res.json({"Mensagem": "Orçamento Excluído!"})
    })
}