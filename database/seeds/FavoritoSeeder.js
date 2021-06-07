'use strict'

/*
|--------------------------------------------------------------------------
| FavoritoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Favorito = use('App/Models/Favorito')

class FavoritoSeeder {
  async run () {
    await Favorito.createMany([
      {
        frase_id: 2,
        usuario_id: 1
      },
      {
        frase_id: 3,
        usuario_id: 3
      },
      {
        frase_id: 1,
        usuario_id: 3
      },
      {
        frase_id: 4,
        usuario_id: 2
      },
    ])
  }
}

module.exports = FavoritoSeeder
