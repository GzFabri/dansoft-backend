import vine from '@vinejs/vine'

export const compraValidator = vine.compile(
  vine.object({
    productoId: vine.number(),
    cantidad: vine.number().min(1),
  })
)
