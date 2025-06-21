import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Categoria from '#models/categoria'
import { DateTime } from 'luxon'
import Venta from '#models/venta'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string

  @column()
  declare precio: number

  @column()
  declare stock: number

  @column()
  declare categoriaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>

  @hasMany(() => Venta)
  declare ventas: HasMany<typeof Venta>
}
