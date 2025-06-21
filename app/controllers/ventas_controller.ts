import type { HttpContext } from '@adonisjs/core/http'
import Venta from '#models/venta'

export default class VentasController {
  // Listar todas las ventas
  async index({ response }: HttpContext) {
    const ventas = await Venta.query().preload('producto')
    return response.ok(ventas)
  }

  // Crear una nueva venta
  async store({ request, response }: HttpContext) {
    const data = request.only(['productoId', 'cantidad'])
    const venta = await Venta.create(data)
    await venta.load('producto')
    return response.created(venta)
  }

  // Mostrar una venta específica
  async show({ params, response }: HttpContext) {
    const venta = await Venta.query().where('id', params.id).preload('producto').firstOrFail()
    return response.ok(venta)
  }

  // Actualizar una venta
  async update({ params, request, response }: HttpContext) {
    const venta = await Venta.findOrFail(params.id)
    const data = request.only(['productoId', 'cantidad'])
    venta.merge(data)
    await venta.save()
    await venta.load('producto')
    return response.ok(venta)
  }

  // Eliminar una venta
  async destroy({ params, response }: HttpContext) {
    const venta = await Venta.findOrFail(params.id)
    await venta.delete()
    return response.noContent()
  }
}
