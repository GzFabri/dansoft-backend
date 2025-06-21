import vine from '@vinejs/vine'

export const categoriaValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(3).maxLength(100),
  })
)
