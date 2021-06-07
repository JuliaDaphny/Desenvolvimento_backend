'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Usuario = use('App/Models/Usuario')

class UsuarioSeeder {
  async run () {
    await Usuario.createMany([
      { 
        id: 1,
        nome: 'Maria', 
        data_nascimento: '11/02/2000',
        email: 'Maria@gmail.com',
        senha: 12345678,
        uf: 'DF'
      },
      { 
        id: 2,
        nome: 'Pedro', 
        data_nascimento: '11/03/2002',
        email: 'Pedro@gmail.com',
        senha: 12345678,
        uf: 'SP'
      },
      { 
        id: 3,
        nome: 'Lulis', 
        data_nascimento: '14/05/2005',
        email: 'Lulis@gmail.com',
        senha: 12345678,
        uf: 'SC'
      },
    ]) 
  }
}

module.exports = UsuarioSeeder
