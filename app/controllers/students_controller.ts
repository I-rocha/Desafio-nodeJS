import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import { studentRegisterValidator } from '#validators/user'

export default class StudentsController {
  public async store({ request, response }: HttpContext) {
    const dt = request.only(['fullName', 'email', 'register', 'dob'])

    // Validate
    const validated = await studentRegisterValidator.validate(dt)

    // Create
    const student: Student = await Student.create(validated)

    return response.json({
      message: 'Estudante criado com sucesso',
    })
  }

  public async read({ request, response }: HttpContext) {
    const student: Student | null = await Student.find(request.param('id'))
    if (student === null) {
      return response.abort({ message: 'Estudante não encontrado' })
    }
    return student
  }
}

