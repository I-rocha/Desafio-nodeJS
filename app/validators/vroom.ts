import vine from '@vinejs/vine'

export const classRegisterValidator = vine.compile(
  vine.object({
    classNo: vine.number().unique(async (db, value, field) => {
      const result = await db.from('classes').select('id').where('class_no', value)
      return result.length ? false : true
    }),
    capacity: vine.number(),
    available: vine.boolean(),
  })
)

export const classUpdateValidator = vine.compile(
  vine.object({
    classNo: vine
      .number()
      .unique(async (db, value, field) => {
        const result = await db.from('classes').select('id').where('class_no', value)
        return result.length ? false : true
      })
      .optional(),
    capacity: vine.number().optional(),
    available: vine.boolean().optional(),
  })
)
