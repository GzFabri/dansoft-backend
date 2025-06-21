import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'
import { categoriaValidator } from '#validators/categoria'

export default class CategoriasController {
  async index({ response }: HttpContext) {
    const categorias = await Categoria.all()
    return response.ok(categorias)
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(categoriaValidator)
    const categoria = await Categoria.create(data)
    return response.created(categoria)
  }

  async show({ params, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    return response.ok(categoria)
  }

  async update({ params, request, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    const data = await request.validateUsing(categoriaValidator)
    categoria.merge(data)
    await categoria.save()
    return response.ok(categoria)
  }

  async destroy({ params, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()
    return response.noContent()
  }
}
