const express = require('express');
const { NaturezaLancamentoController } = require('./src/controllers/NaturezaLancamentoController');
const { TituloController } = require('./src/controllers/TituloController');

const routes = express.Router();
const naturezaLancamentoController = new NaturezaLancamentoController();
const tituloController = new TituloController();

routes.get('/naturezas-lancamento', naturezaLancamentoController.obterTodos);
routes.get('/titulos', tituloController.obterTodos);

routes.post('/naturezas-lancamento', naturezaLancamentoController.adicionar);
routes.post('/titulos', tituloController.adicionar);

routes.put('/naturezas-lancamento/:id', naturezaLancamentoController.editar);
routes.put('/titulos/:id', tituloController.editar);

module.exports = { routes }