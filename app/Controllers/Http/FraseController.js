'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Frase = use('App/Models/Frase')

/**
 * Resourceful controller for interacting with frases
 */
class FraseController {
  /**
   * Show a list of all frases.
   * GET frases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Frase.query()
                .select('id','nome_do_livro','frase') 
                .paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new frase.
   * GET frases/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Create/save a new frase.
   * POST frases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Frase.getCampoFrase() 
    const frases = request.only(campos) 
    return await Frase.create(frases)
  }

  /**
   * Display a single frase.
   * GET frases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Frase.query()    
                      .select('id','nome_do_livro','frase','categoria_id','autor_id')           
                      .with('autor')
                      .with('categoria')
                      .where(' id', params.id)
                      .first();
  }

  /**
   * Render a form to update an existing frase.
   * GET frases/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
 
  /**
   * Update frase details.
   * PUT or PATCH frases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const frase = await Frase.findOrFail(params.id)

    const campos = Frase.getCampoFrase()
    const dados = request.only(campos)

    frase.merge(dados) 
    frase.save() 
    return frase;
  }

  /**
   * Delete a frase with id.
   * DELETE frases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const frase = await Frase.findOrFail(params.id)
    return await frase.delete();
  }
}

module.exports = FraseController
