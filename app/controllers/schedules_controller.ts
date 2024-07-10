import Class from '#models/class'
import Student from '#models/student'
import Teacher from '#models/teacher'
import type { HttpContext } from '@adonisjs/core/http'

export default class SchedulesController {
  public async store({ request, response }: HttpContext) {
    const teacher: Teacher = await Teacher.findOrFail(request.param('teacher_id'))
    const myClass: Class = await Class.findOrFail(request.param('class_id'))
    const student: Student = await Student.findOrFail(request.param('student_id'))

    // Check if teacher own the class
    const teacher_class: Class[] = await teacher
      .related('classes')
      .query()
      .where('class_no', myClass.classNo)

    if (teacher_class.length === 0) {
      return response.json({ message: 'O professor não é dono dessa sala' })
    }

    // Student is already in class
    const class_student = await myClass.related('student').query().where('student_id', student.id)

    if (class_student.length !== 0) {
      return response.json({ message: 'Estudante ja está na sala' })
    }

    // Check size of class
    const occupation = await myClass.related('student').query()

    if (occupation.length + 1 >= myClass.capacity) {
      myClass.available = false
      return response.json({ message: 'A classe não tem mais lugar disponível' })
    }

    return await student.related('class').create(myClass)
  }
}

