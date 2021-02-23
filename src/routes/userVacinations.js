import { Router } from 'express'

import { createUserVacinations, 
    getUserVacinations,
    getUserVacinationsById,
    deleteUserVacinations,
    updateUserVacinations } from '../controllers/userVacinations.controller'

const router = Router();
// /api/UserVacinations/
router.post('/', createUserVacinations) 
router.get('/', getUserVacinations)

// /api/UserVacinations/UserVacinationsID
router.get('/:id', getUserVacinationsById )
router.delete('/:id', deleteUserVacinations )
router.put('/:id', updateUserVacinations)

export default router;