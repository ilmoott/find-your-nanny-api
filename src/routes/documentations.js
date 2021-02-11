import { Router } from 'express'
const router = Router();

import { createDocumentations, 
         getDocumentations,
         getDocumentationById,
         deleteDocumentation,
         updateDocumentation } from '../controllers/documentation.controller'
 
// /api/documentation/
router.post('/', createDocumentations) 
router.get('/', getDocumentations)

// /api/documentation/documentationID
router.get('/:id', getDocumentationById )
router.delete('/:id', deleteDocumentation )
router.put('/:id', updateDocumentation)

export default router;