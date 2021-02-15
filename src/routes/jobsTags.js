import { Router } from 'express'

import { createJobTags, 
    getJobTags,
    getJobTagsById,
    deleteJobTags,
    updateJobTags } from '../controllers/jobTags.controller'

const router = Router();
// /api/JobTags/
router.post('/', createJobTags) 
router.get('/', getJobTags)

// /api/JobTags/JobTagsID
router.get('/:id', getJobTagsById )
router.delete('/:id', deleteJobTags )
router.put('/:id', updateJobTags)

export default router;