class TituloModel {
  constructor(obj){
      obj = obj || {};
      this.id = obj.id;
      this.descricao = obj.descricao;
      this.numero = obj.numero;
      this.tipo= obj.tipo
      this.idNaturezaLancamento = obj.idNaturezaLancamento;
      this.dataReferencia = obj.dataReferencia;
      this.dataVencimento = obj.dataVencimento;
      this.dataPagamento = obj.dataPagamento;
      this.valorUnitario = obj.valorUnitario;
      this.valorDesconto = obj.valorDesconto;
      this.valorJuros = obj.valorJuros;
      this.valorMulta = obj.valorMulta;
      this.observacao = obj.observacao;
  }
}

module.exports = { TituloModel }