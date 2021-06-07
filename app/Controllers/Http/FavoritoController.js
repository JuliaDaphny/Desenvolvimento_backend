'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Favorito = use('App/Models/Favorito')

/**
 * Resourceful controller for interacting with favoritos
 */
class FavoritoController {
  /**
   * Show a list of all favoritos.
   * GET favoritos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Favorito.query()
                  .select('usuario_id','frase_id')  
                  .paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new favorito.
   * GET favoritos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Create/save a new favorito.
   * POST favoritos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Favorito.getCampoFavorito() 
    const favoritos = request.only(campos) 
    return await Favorito.create(favoritos)
  }

  /**
   * Display a single favorito.
   * GET favoritos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  return await Favorito.query()
                      .select('usuario_id','frase_id') 
                      .with('usuario')
                      .with('frase')
                      .where('id', params.id)
                      .first();
  }

  /**
   * Render a form to update an existing favorito.
   * GET favoritos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Update favorito details.
   * PUT or PATCH favoritos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const favorito = await Favorito.findOrFail(params.id)

    const campos = Favorito.getCampoFavorito()
    const dados = request.only(campos)

    favorito.merge(dados) 
    await favorito.save() 
    return favorito;
  }

  /**
   * Delete a favorito with id.
   * DELETE favoritos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const favorito = await Favorito.findOrFail(params.id)
    return await favorito.delete();
  }
}

module.exports = FavoritoController
