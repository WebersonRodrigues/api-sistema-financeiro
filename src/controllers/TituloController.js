const apiTitulo = require('../api/titulos-api');

class TituloController {
    obterTodos(request, response){
        let dados =  apiTitulo.obterTodos();
        response.send(dados);
    }
    adicionar(request, response){
        let titulo =  apiTitulo.adicionar(request.body);
        response.status(200).send(titulo);
    }

    editar(request, response){
        const { id } = request.params;
        var objTitulo = request.body;
        objTitulo.id = Number(id);

        let natureza =  apiTitulo.editar(objTitulo);
        response.status(200).send(natureza);
    }
}

module.exports = { TituloController }