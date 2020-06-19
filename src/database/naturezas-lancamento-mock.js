const { NaturezaLancamentoModel } = require('../models/natureza-lancamento-model');

const naturezas = [
    new NaturezaLancamentoModel({
        id:1, 
        nome: "Despesas com a casa", 
        codigo:"00001", 
        status: true,
        classificacao: "1.1.1.0",
        tipo: 'DEBITO'
    }),
    new NaturezaLancamentoModel({
        id:2, 
        nome:"Despesas com o carro", 
        codigo:"00002", 
        status: true,
        classificacao: "1.1.1.1",
        tipo: 'DEBITO'
    }),
    new NaturezaLancamentoModel({
        id:3, 
        nome:"Salarios", 
        codigo:"00003", 
        status: true,
        classificacao: "2.1.1.0",
        tipo: 'CREDITO'
    }),
    new NaturezaLancamentoModel({
        id:4, 
        nome:"Outros recebimentos", 
        codigo:"00003", 
        status: true,
        classificacao: "2.1.1.1",
        tipo: 'CREDITO'
    }),
];
module.exports = { naturezas };