import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare classId: number

  @column({})
  declare studentId: number
}
