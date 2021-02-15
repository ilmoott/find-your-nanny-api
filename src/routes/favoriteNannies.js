import { Router } from 'express'

import { createFavoriteNannies, 
    getFavoriteNannies,
    getFavoriteNanniesById,
    deleteFavoriteNannies,
    updateFavoriteNannies } from '../controllers/favoriteNannies.controller'

const router = Router();
// /api/FavoriteNannies/
router.post('/', createFavoriteNannies) 
router.get('/', getFavoriteNannies)

// /api/FavoriteNannies/FavoriteNanniesID
router.get('/:id', getFavoriteNanniesById )
router.delete('/:id', deleteFavoriteNannies )
router.put('/:id', updateFavoriteNannies)

export default router;