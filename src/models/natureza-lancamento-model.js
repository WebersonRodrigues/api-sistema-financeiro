class NaturezaLancamentoModel {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.codigo = obj.codigo;
        this.status = obj.status;
        this.classificacao = obj.classificacao;
        this.tipo = obj.tipo;
    }
}

module.exports = { NaturezaLancamentoModel   }