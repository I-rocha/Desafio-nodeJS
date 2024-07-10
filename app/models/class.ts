import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Teacher from './teacher.js'
import Student from './student.js'

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

  @manyToMany(() => Student, {
    pivotTable: 'schedules',
  })
  declare student: ManyToMany<typeof Student>
}
