import { Router } from 'express'

import { createCancelJustify, 
    getCancelJustify,
    getCancelJustifyById,
    deleteCancelJustify,
    updateCancelJustify } from '../controllers/cancelJustify.controller'

const router = Router();
// /api/CancelJustify/
router.post('/', createCancelJustify) 
router.get('/', getCancelJustify)

// /api/CancelJustify/CancelJustifyID
router.get('/:id', getCancelJustifyById )
router.delete('/:id', deleteCancelJustify )
router.put('/:id', updateCancelJustify)

export default router;