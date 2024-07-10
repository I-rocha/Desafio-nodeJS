import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare teacherId: number

  @column({})
  declare classNo: number

  @column({})
  declare capacity: number

  @column({})
  declare available: number
}

