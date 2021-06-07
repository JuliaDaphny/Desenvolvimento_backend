'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Frase extends Model {
    static getCampoFrase(){
        return ['nome','descricao','categoria_id','autor_id']
    }

    autor(){ 
        return this.belongsTo('App/Models/Autor')
                .select('id','nome','descricao')
    }

    categoria(){ 
        return this.belongsTo('App/Models/Categoria')
                .select('id','nome_da_categoria')
    }
}

module.exports = Frase
