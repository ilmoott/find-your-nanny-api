import { Router } from 'express'

import { createGenders, 
    getGenders,
    getGendersById,
    deleteGenders,
    updateGenders } from '../controllers/genders.controller'

const router = Router();
// /api/Genders/
router.post('/', createGenders) 
router.get('/', getGenders)

// /api/Genders/GendersID
router.get('/:id', getGendersById )
router.delete('/:id', deleteGenders )
router.put('/:id', updateGenders)

export default router;