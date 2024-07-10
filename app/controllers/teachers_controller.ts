import type { HttpContext } from '@adonisjs/core/http'
import Teacher from '#models/teacher'
import { teacherRegisterValidator } from '#validators/user'

export default class TeachersController {
  public async store({ request, response }: HttpContext) {
    const dt = request.only(['fullName', 'email', 'register', 'dob'])

    // Validate
    const validated = await teacherRegisterValidator.validate(dt)

    // Create
    const teacher: Teacher = await Teacher.create(validated)

    return response.json({
      message: 'Professor criado com sucesso',
    })
  }
}

