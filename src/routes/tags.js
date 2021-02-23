import { Router } from 'express'

import { createTags, 
    getTags,
    getTagsById,
    deleteTags,
    updateTags } from '../controllers/tags.controller'

const router = Router();
// /api/Tags/
router.post('/', createTags) 
router.get('/', getTags)

// /api/Tags/TagsID
router.get('/:id', getTagsById )
router.delete('/:id', deleteTags )
router.put('/:id', updateTags)

export default router;