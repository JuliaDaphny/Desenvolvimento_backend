'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorito extends Model {
    static getCampoFavorito(){
        return ['usuario_id','frase_id']
    }

    usuario(){ 
        return this.belongsTo('App/Models/Usuario')
                .select('id','nome','email','data_nascimento','uf')
    }

    frase(){ 
        return this.belongsTo('App/Models/Frase')
                .select('id','nome_do_livro','frase','autor_id','categoria_id')
                .with('autor')
    }
}

module.exports = Favorito
