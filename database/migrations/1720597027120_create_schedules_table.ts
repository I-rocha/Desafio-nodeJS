import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'schedules'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('class_id').unsigned().references('classes.id').notNullable()
      table.integer('student_id').unsigned().references('students.id').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
