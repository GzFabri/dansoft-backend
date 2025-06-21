import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Producto from '#models/producto'

export default class Venta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'producto_id' })
  declare productoId: number

  @column()
  declare cantidad: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Producto)
  declare producto: BelongsTo<typeof Producto>
}
