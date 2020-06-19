const  { TituloModel } = require('../models/titulo-model');

const titulos = [
 new TituloModel({
    id:1,
    descricao:"Compra de Pneus Carro",
    numero:"00001",
    tipo:"APAGAR",
    idNaturezaLancamento: 1,
    dataReferencia:'01/03/2020',
    dataVencimento:'27/07/2020',
    valorUnitario: 1190.0,
    valorJuros: 10.0,
    valorDesconto: 90.0,
    valorMulta:0,
    observacao: "Compra de 2 pneus 17 para ecosport."
 }),
 new TituloModel({
    id:2,
    descricao:"Salario Mês",
    numero:"00001",
    tipo:"ARECEBER",
    idNaturezaLancamento: 1,
    dataReferencia:'01/06/2020',
    dataVencimento:'05/07/2020',
    valorUnitario: 7850.0,
    valorJuros: 0,
    valorDesconto:0,
    valorMulta:0,
    observacao: "Salario mensal referente ao mês de Junho."
 })
];

module.exports = { titulos }