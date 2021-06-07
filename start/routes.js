'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users','UserController').apiOnly()
Route.post('/token','UserController.token')

Route.group(()=>{

  Route.resource('/autors', 'AutorController')
  .apiOnly()
  .validator(new Map([
    [['store', 'update'], 'Autor' ],
 ]))

Route.resource('/categorias', 'CategoriaController')
  .apiOnly()
  .validator(new Map([
  [['store', 'update'], 'Categoria'],
]))

Route.resource('/favoritos', 'FavoritoController')
  .apiOnly()
  .validator(new Map([
  [['store', 'update'], 'Favorito'],
]))

Route.resource('/frases', 'FraseController')
  .apiOnly()
  .validator(new Map([
  [['store', 'update'], 'Frase'],
]))
   
Route.resource('/usuarios', 'UsuarioController')
  .apiOnly()
  .validator(new Map([
  [['store', 'update'], 'Usuario'],
]))

}).middleware('auth')