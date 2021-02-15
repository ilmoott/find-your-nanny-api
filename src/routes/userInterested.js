import { Router } from 'express'

import { createUserInterested, 
    getUserInterested,
    getUserInterestedById,
    deleteUserInterested,
    updateUserInterested } from '../controllers/userInterested.controller'

const router = Router();
// /api/UserInterested/
router.post('/', createUserInterested) 
router.get('/', getUserInterested)

// /api/UserInterested/UserInterestedID
router.get('/:id', getUserInterestedById )
router.delete('/:id', deleteUserInterested )
router.put('/:id', updateUserInterested)

export default router;