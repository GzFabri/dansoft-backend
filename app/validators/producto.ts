import vine from '@vinejs/vine'

export const productoValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(3).maxLength(100),
    descripcion: vine.string().trim().minLength(10).maxLength(500),
    precio: vine.number().positive(),
    stock: vine.number().min(0),
    categoriaId: vine.number().exists(async (db, value) => {
      const row = await db.from('categorias').where('id', value).first()
      return !!row
    }),
  })
)
