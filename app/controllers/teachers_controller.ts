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

  public async read({ request, response }: HttpContext) {
    const teacher: Teacher | null = await Teacher.find(request.param('id'))
    if (teacher === null) {
      return response.abort({ message: 'Professor não encontrado' })
    }
    return teacher
  }
}

