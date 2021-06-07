'use strict'

const { HasManyThrough } = require('@adonisjs/lucid/src/Lucid/Relations')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Autor extends Model {
    static getCampoAutor(){
        return ['nome','descricao']
    }

    frases(){ 
        return this.hasMany('App/Models/Frase')
            .select('id','nome_do_livro','frase','autor_id','categoria_id')
    }
}

module.exports = Autor
