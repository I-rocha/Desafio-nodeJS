import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Class from './class.js'

export default class Teacher extends BaseModel {
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

  @hasMany(() => Class)
  declare classes: HasMany<typeof Class>
}
