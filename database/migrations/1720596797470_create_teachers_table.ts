import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'teachers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.string('full_name', 70).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('register', 9).notNullable().unique()
      table.date('dob').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
