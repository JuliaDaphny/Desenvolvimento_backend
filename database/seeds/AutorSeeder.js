'use strict'

/*
|--------------------------------------------------------------------------
| AutorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Autor = use('App/Models/Autor')

class AutorSeeder {
  async run () {
    await Autor.createMany([
      { 
        id: 1,
        nome: 'Lewis Carroll', 
        descricao: '(1832 - 1898) foi um poeta, matemático e romancista britânico. Carroll tornou-se mundialmente famoso quando escreveu o clássico livro "Alice no País das Maravilhas", e além de outros poemas. Devido ao seu desempenho como matemático, foi convidado a lecionar matemática no Christ College, em Oxford. Lewis Carroll era apaixonado por jogos, tanto que inventou um grande número de enigmas, jogos matemáticos e de lógica e por isso, os livros infantis de Carroll contêm diversos problemas matemáticos e de lógica'
      },
      { 
        id: 2,
        nome: 'John Green', 
        descricao: 'John Green (1977-) é um romancista e vlogger norte-americano, autor de livros para adolescentes, entre eles, "A Culpa é das Estrelas", "Cidades de Papel" e "Quem é Você, Alasca?". Algumas de suas obras já ganharam adaptações para o cinema e para a TV. Ao lado do irmão, mantém um canal no YouTube, o VolgBrothers, onde apresentam temas contemporâneos.'
      },
      { 
        id: 3,
        nome: 'Antoine de Saint Exupéry', 
        descricao: 'Antoine de Saint Exupéry (1900-1944) foi um escritor, ilustrador e piloto, é o autor de um clássico da literatura “O Pequeno Príncipe”, escrito em 1943. Nasceu em Lyon (França) e era o terceiro filho do conde Saint-Exupéry e da condessa Marie Fascolombe, família aristocrática empobrecida. Estudou no colégio jesuíta Notre Dame de Saint Croix e no colégio dos Marianistas, em Friburgo, na Suíça. E morreu em um acidente de avião, durante uma missão de reconhecimento, no dia 31 de julho de 1944, abatido por um caça alemão.'
      }
    ])
  }
}

module.exports = AutorSeeder
