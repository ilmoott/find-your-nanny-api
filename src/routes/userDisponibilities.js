import { Router } from 'express'

import { createUserDisponibilities, 
    getUserDisponibilities,
    getUserDisponibilitiesById,
    deleteUserDisponibilities,
    updateUserDisponibilities } from '../controllers/userDisponibilities.controller'

const router = Router();
// /api/UserDisponibilities/
router.post('/', createUserDisponibilities) 
router.get('/', getUserDisponibilities)

// /api/UserDisponibilities/UserDisponibilitiesID
router.get('/:id', getUserDisponibilitiesById )
router.delete('/:id', deleteUserDisponibilities )
router.put('/:id', updateUserDisponibilities)

export default router;