import type { HttpContext } from '@adonisjs/core/http'
import Producto from '#models/producto'
import { productoValidator } from '#validators/producto'
import Venta from '#models/venta'
import { compraValidator } from '#validators/compra'

export default class ProductosController {
  async index({ request, response }: HttpContext) {
    const { categoriaId, search } = request.qs()

    const query = Producto.query().preload('categoria')

    if (categoriaId) {
      query.where('categoria_id', categoriaId)
    }

    if (search) {
      query.whereILike('nombre', `%${search}%`)
    }

    const productos = await query
    return response.ok(productos)
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(productoValidator)
    const producto = await Producto.create(data)
    return response.created(producto)
  }

  async show({ params, response }: HttpContext) {
    const producto = await Producto.query()
      .where('id', params.id)
      .preload('categoria')
      .firstOrFail()
    return response.ok(producto)
  }

  async update({ params, request, response }: HttpContext) {
    const producto = await Producto.findOrFail(params.id)
    const data = await request.validateUsing(productoValidator)
    producto.merge(data)
    await producto.save()
    return response.ok(producto)
  }

  async destroy({ params, response }: HttpContext) {
    const producto = await Producto.findOrFail(params.id)
    await producto.delete()
    return response.noContent()
  }

  async comprar({ request, response }) {
    const { productoId, cantidad } = await request.validateUsing(compraValidator)

    const producto = await Producto.findOrFail(productoId)

    if (!producto) {
      return response.notFound({ message: 'Stock insuficiente' })
    }

    producto.stock -= cantidad
    await producto.save()

    await Venta.create({
      productoId,
      cantidad,
    })

    return response.ok({
      message: 'Compra realizada con éxito',
      producto,
    })
  }
}
