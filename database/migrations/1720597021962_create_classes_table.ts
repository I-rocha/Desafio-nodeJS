import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'classes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.integer('teacher_id').unsigned().references('tachers.id').notNullable()

      table.integer('class_no').notNullable().unique()
      table.integer('capacity').notNullable()
      table.boolean('available').notNullable().defaultTo(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
