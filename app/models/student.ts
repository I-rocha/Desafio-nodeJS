import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Class from './class.js'

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

  @manyToMany(() => Class, {
    pivotTable: 'schedules',
  })
  declare class: ManyToMany<typeof Class>
}
