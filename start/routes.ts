/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TeachersController = () => import('#controllers/teachers_controller')
const StudentsController = () => import('#controllers/students_controller')

// Teacher
router.post('/teachers/', [TeachersController, 'store'])
router.get('/teachers/:id', [TeachersController, 'read'])
router.put('/teachers/:id', [TeachersController, 'update'])
router.delete('/teachers/:id', [TeachersController, 'delete'])

// Student
router.post('/students/', [StudentsController, 'store'])
// router.get('/students/:id', [StudentsController, 'read'])
// router.put('/students/:id', [StudentsController, 'update'])
// router.delete('/students/:id', [StudentsController, 'delete'])

