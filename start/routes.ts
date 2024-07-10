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

router.post('/teachers/', [TeachersController, 'store'])
router.get('/teachers/:id', [TeachersController, 'read'])
router.put('/teachers/:id', [TeachersController, 'update'])
// router.put('/teachers/:id', [TeachersController, 'update'])

