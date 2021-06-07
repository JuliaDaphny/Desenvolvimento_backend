'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('data_nascimento')
      table.string('email', 100).notNullable()
      table.string('senha', 10).notNullable()
      table.string('uf', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
