import { Router } from 'express'

import { createJobsTags, 
    getJobsTags,
    getJobsTagsById,
    deleteJobsTags,
    updateJobsTags } from '../controllers/jobsTags.controller'

const router = Router();
// /api/JobTags/
router.post('/', createJobsTags) 
router.get('/', getJobsTags)

// /api/JobTags/JobTagsID
router.get('/:id', getJobsTagsById )
router.delete('/:id', deleteJobsTags )
router.put('/:id', updateJobsTags)

export default router;