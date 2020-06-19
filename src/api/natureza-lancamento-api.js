
const { naturezas } = require('../database/naturezas-lancamento-mock');
const { NaturezaLancamentoModel } = require('../models/natureza-lancamento-model');

module.exports = {
    obterTodos() {
       return naturezas;
    },

    adicionar(objNatureza){
        var natureza = new NaturezaLancamentoModel(objNatureza);
        natureza.id = naturezas.length + 1;

        naturezas.push(natureza);
        return natureza;
    },

    editar(objNatureza){
        var natureza = new NaturezaLancamentoModel(objNatureza);
        var index = naturezas.indexOf(natureza.id);

        naturezas.splice(index,1, natureza);
        return naturezas.filter(n => n.id == natureza.id)[0];
    }
}