import { Router } from 'express'

import { createUsers, 
    getUsers,
    getUsersById,
    deleteUsers,
    updateUsers } from '../controllers/users.controller'

const router = Router();
// /api/Users/
router.post('/', createUsers) 
router.get('/', getUsers)

// /api/Users/UsersID
router.get('/:id', getUsersById )
router.delete('/:id', deleteUsers )
router.put('/:id', updateUsers)

export default router;