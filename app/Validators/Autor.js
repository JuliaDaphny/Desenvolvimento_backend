'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Autor extends ValidatorAbstract {
  get rules () {
    return {
      nome:'required|max:100',
      descricao:'required|max:2000'
    }
  }
}

module.exports = Autor
