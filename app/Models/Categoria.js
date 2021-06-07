'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    static getCampoCategoria(){
        return ['descricao']
    }

    frases(){ 
        return this.hasMany('App/Models/Frase')
        .select('id','nome_do_livro','frase','autor_id','categoria_id')
        .with('autor')
    }
}

module.exports = Categoria
