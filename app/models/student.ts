import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare fullName: string

  @column({})
  declare email: string

  @column({})
  declare register: string

  @column({})
  declare dob: Date
}
