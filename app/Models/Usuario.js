'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static getCampoUsuario(){
        return ['nome','email','uf','senha','data_nascimento']
    }

    favorito(){ 
        return this.hasMany('App/Models/Favorito')
                .select('frase_id','usuario_id','id')
                .with('frase')
    }
}

module.exports = Usuario
