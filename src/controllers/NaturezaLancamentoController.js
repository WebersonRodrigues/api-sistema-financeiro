const apiNaturezaLancamento = require('../api/natureza-lancamento-api');

class NaturezaLancamentoController {
    obterTodos(request, response){
       let dados =  apiNaturezaLancamento.obterTodos();
       response.send(dados);
    }
    adicionar(request, response){
        let natureza =  apiNaturezaLancamento.adicionar(request.body);
        response.status(200).send(natureza);
    }

    editar(request, response){
        const { id } = request.params;
        var objNatureza = request.body;
        objNatureza.id = Number(id);

        let natureza =  apiNaturezaLancamento.editar(objNatureza);
        response.status(200).send(natureza);
    }
}

module.exports = { NaturezaLancamentoController }