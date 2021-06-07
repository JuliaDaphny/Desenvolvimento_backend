'use strict'

/*
|--------------------------------------------------------------------------
| FraseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Frase = use('App/Models/Frase')

class FraseSeeder {
  async run () {
    await Frase.createMany([
      { 
        id: 1, 
        nome_do_livro: 'Alice no País das Maravilhas', 
        frase: 'Quando acordei hoje de manhã, eu sabia quem eu era, mas acho que já mudei muitas vezes desde então.',
        autor_id: 1,
        categoria_id: 1
      },
      { 
        id: 2,
        nome_do_livro: 'A Culpa é das Estrelas ', 
        frase: 'Alguns infinitos são maiores que outros.',
        autor_id: 2,
        categoria_id: 2
      },
      { 
        id: 3,
        nome_do_livro: 'O Pequeno Príncipe ', 
        frase: 'O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem.',
        autor_id: 3,
        categoria_id: 3
      },
      { 
        id: 4,
        nome_do_livro: 'Alice no País das Maravilhas ', 
        frase: 'A única forma de chegar ao impossível, é acreditar que é possível.',
        autor_id: 1,
        categoria_id: 1
      }
    ])
  }
}

module.exports = FraseSeeder
