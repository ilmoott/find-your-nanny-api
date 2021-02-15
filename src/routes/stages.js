import { Router } from 'express'

import { createStages, 
    getStages,
    getStagesById,
    deleteStages,
    updateStages } from '../controllers/stages.controller'

const router = Router();
// /api/Stages/
router.post('/', createStages) 
router.get('/', getStages)

// /api/Stages/StagesID
router.get('/:id', getStagesById )
router.delete('/:id', deleteStages )
router.put('/:id', updateStages)

export default router;