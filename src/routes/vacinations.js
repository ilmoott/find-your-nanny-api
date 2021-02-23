import { Router } from 'express'

import { createVacinations, 
    getVacinations,
    getVacinationById,
    deleteVacination,
    updateVacination } from '../controllers/vacination.controller'

const router = Router();
// /api/vacination/
router.post('/', createVacinations) 
router.get('/', getVacinations)

// /api/vacination/vacinationID
router.get('/:id', getVacinationById )
router.delete('/:id', deleteVacination )
router.put('/:id', updateVacination)

export default router;