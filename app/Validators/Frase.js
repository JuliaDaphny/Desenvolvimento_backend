'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Frase extends ValidatorAbstract {
  get rules () {
    return {
      nome:'required|max:1000|min:20',
      descricao:'required|max:2000|min:50',
      autor_id:'required|integer',
      categoria_id:'required|integer'
    }
  }
}

module.exports = Frase
