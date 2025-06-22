import type { HttpContext } from '@adonisjs/core/http'
import Producto from '#models/producto'
import Venta from '#models/venta'

export default class VentasController {
  // Listar todas las ventas
  async index({ response }: HttpContext) {
    const ventas = await Venta.query().preload('producto')
    return response.ok(ventas)
  }

  // Crear una nueva venta
  async store({ request, response }: HttpContext) {
    const { productoId, cantidad } = request.only(['productoId', 'cantidad'])

    // Buscar el producto
    const producto = await Producto.findOrFail(productoId)

    // Verificar stock suficiente
    if (producto.stock < cantidad) {
      return response.badRequest({ error: 'Stock insuficiente para realizar la venta.' })
    }

    // Reducir el stock y guardar
    producto.stock -= cantidad
    await producto.save()

    // Registrar la venta
    const venta = await Venta.create({ productoId, cantidad })
    await venta.load('producto')

    // Alerta si el stock es 5 o menos
    let alerta = null
    if (producto.stock <= 5) {
      alerta = `¡Alerta! El stock del producto "${producto.nombre}" es bajo (${producto.stock} unidades).`
    }

    return response.created({ venta, alerta })
  }

  // Mostrar una venta específica
  async show({ params, response }: HttpContext) {
    const venta = await Venta.query().where('id', params.id).preload('producto').firstOrFail()
    return response.ok(venta)
  }

  // Actualizar una venta
  async update({ params, request, response }: HttpContext) {
    const venta = await Venta.findOrFail(params.id)
    const { productoId, cantidad } = request.only(['productoId', 'cantidad'])

    // Buscar el producto asociado (puede cambiar el producto)
    const producto = await Producto.findOrFail(productoId)

    // Si el producto cambió, devolver stock al producto anterior y ajustar el nuevo
    if (venta.productoId !== productoId) {
      // Devolver stock al producto anterior
      const productoAnterior = await Producto.findOrFail(venta.productoId)
      productoAnterior.stock += venta.cantidad
      await productoAnterior.save()

      // Verificar stock suficiente en el nuevo producto
      if (producto.stock < cantidad) {
        return response.badRequest({ error: 'Stock insuficiente para realizar la venta.' })
      }
      producto.stock -= cantidad
      await producto.save()
    } else {
      // Devolver stock de la venta anterior
      producto.stock += venta.cantidad

      // Verificar stock suficiente para la nueva cantidad
      if (producto.stock < cantidad) {
        return response.badRequest({ error: 'Stock insuficiente para actualizar la venta.' })
      }

      // Restar la nueva cantidad
      producto.stock -= cantidad
      await producto.save()
    }

    // Actualizar la venta
    venta.merge({ productoId, cantidad })
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
