import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import { studentRegisterValidator, studentUpdateValidator } from '#validators/user'

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

  public async update({ request, response }: HttpContext) {
    const student: Student | null = await Student.find(request.param('id'))

    const dt = request.only(['fullName', 'email', 'register', 'dob'])

    // Validate
    const validated = await studentUpdateValidator.validate(dt)

    if (student === null) {
      return response.abort({ message: 'Estudante não encontrado' })
    }
    student.fullName = request.input('fullName')
    student.email = request.input('email')
    student.register = request.input('register')
    student.dob = request.input('dob')
    student.save()
    return student
  }
}

