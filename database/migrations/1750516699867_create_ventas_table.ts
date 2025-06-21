import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ventas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('producto_id').unsigned().references('id').inTable('productos').onDelete('CASCADE')
      table.integer('cantidad').unsigned().notNullable()
      table.timestamps(true) // Esto agrega created_at y updated_at automáticamente
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
