'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FraseSchema extends Schema {
  up () {
    this.create('frases', (table) => {
      table.increments()
      table.string('nome_do_livro', 1000).notNullable()
      table.string('frase', 2000).notNullable()
      table.integer('autor_id').references('id').inTable('autors').unsigned().notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('frases')
  }
}

module.exports = FraseSchema
