import { Router } from 'express'

import { createUserDocumentations, 
    getUserDocumentations,
    getUserDocumentationsById,
    deleteUserDocumentations,
    updateUserDocumentations } from '../controllers/userDocumentations.controller'

const router = Router();
// /api/UserDocumentations/
router.post('/', createUserDocumentations) 
router.get('/', getUserDocumentations)

// /api/UserDocumentations/UserDocumentationsID
router.get('/:id', getUserDocumentationsById )
router.delete('/:id', deleteUserDocumentations )
router.put('/:id', updateUserDocumentations)

export default router;