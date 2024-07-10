import vine from '@vinejs/vine'

export const teacherRegisterValidator = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(70),
    email: vine
      .string()
      .email()
      .unique(async (db, value, field) => {
        const result = await db.from('teachers').select('id').where('email', value)
        return result.length ? false : true
      }),
    register: vine.string().maxLength(9),
    dob: vine.date(),
  })
)
