'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var orcamentoSchema = Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    telefone: {
        type: String
    },
    email: {
        type: String
    },
    ramo: {
        type: String
    },
    empresa: {
        type: String
    },
    templates: {
        type: Array
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('orcamento', orcamentoSchema)