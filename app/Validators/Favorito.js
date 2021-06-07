'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Favorito {
  get rules () {
    return {
      frase_id:'required|integer',
      usuario_id:'required|integer'
    }
  }
}

module.exports = Favorito
