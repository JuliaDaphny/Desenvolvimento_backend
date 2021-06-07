'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Categoria = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await Categoria.createMany([
      {
        id: 1,
        nome_da_categoria: 'Fantasia'
      },
      {
        id: 2,
        nome_da_categoria: 'Romance'
      },
      {
        id: 3,
        nome_da_categoria: 'Infantil'
      },
    ])
  }
}

module.exports = CategoriaSeeder
