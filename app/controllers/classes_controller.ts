import type { HttpContext } from '@adonisjs/core/http'
import Teacher from '#models/teacher'
import Class from '#models/class'
import { classRegisterValidator } from '#validators/vroom'

export default class ClassesController {
  public async store({ request, response }: HttpContext) {
    const dt = request.only(['classNo', 'capacity', 'available'])

    // Validate
    const validated = await classRegisterValidator.validate(dt)

    // Find relation
    const teacher: Teacher = await Teacher.findOrFail(request.param('id'))

    // Create record
    const myClass: Class = await teacher.related('classes').create(validated)

    return myClass
  }
}

