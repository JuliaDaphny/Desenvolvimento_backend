'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Usuario extends ValidatorAbstract {
  get rules () {
    return {
      nome:'required|max:100|min:4',
      data_nascimento:'max:11',
      email:'required|max:100',
      senha:'required|max:13|min:5',
      uf:'max:2'
    }
  }
}

module.exports = Usuario
