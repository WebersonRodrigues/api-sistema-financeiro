
const { TituloModel } = require('../models/titulo-model');
const { titulos } = require('../database/titulos-mock');


module.exports = {
    obterTodos() {
       return titulos;
    },

    adicionar(objTitulo){
        var titulo = new TituloModel(objTitulo);
        titulo.id = titulos.length + 1;

        titulos.push(titulo);
        return titulo;
    },
    
    editar(objTitulo){
        var titulo = new TituloModel(objTitulo);
        var index = titulos.indexOf(titulo.id);

        titulos.splice(index,1, titulo);
        return titulos.filter(n => n.id == titulo.id)[0];
    }

}