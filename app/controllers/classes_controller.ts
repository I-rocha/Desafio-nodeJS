import type { HttpContext } from '@adonisjs/core/http'
import Teacher from '#models/teacher'
import Class from '#models/class'
import { classRegisterValidator, classUpdateValidator } from '#validators/vroom'

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

  public async read({ request, response }: HttpContext) {
    const myClass: Class | null = await Class.find(request.param('id'))
    if (myClass === null) {
      return response.abort({ message: 'Classe não encontrada' })
    }
    return myClass
  }

  public async update({ request, response }: HttpContext) {
    const myClass: Class | null = await Class.find(request.param('id'))

    const dt = request.only(['classNo', 'capacity', 'available'])

    // Validate
    const validated = await classUpdateValidator.validate(dt)

    // Empty input
    if (myClass === null) {
      return response.abort({ message: 'Classe não encontrado' })
    }

    // Save record
    myClass.classNo = request.input('class_no')
    myClass.capacity = request.input('capacity')
    myClass.available = request.input('available')
    myClass.save()
    return myClass
  }

  public async delete({ request, response }: HttpContext) {
    const myClass: Class | null = await Class.find(request.param('id'))

    // Empty del
    if (myClass === null) {
      return response.json({ message: 'Classe já não existe' })
    }
    myClass.delete()
    return response.json({ message: 'Classe deletada', data: myClass })
  }
}

