import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Teacher from './teacher.js'

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
  declare available: boolean

  @belongsTo(() => Teacher)
  declare teacher: BelongsTo<typeof Teacher>
}
