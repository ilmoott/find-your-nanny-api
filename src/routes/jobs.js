import { Router } from 'express'

import { createJobs, 
    getJobs,
    getJobsById,
    deleteJobs,
    updateJobs } from '../controllers/jobs.controller'

const router = Router();
// /api/Jobs/
router.post('/', createJobs) 
router.get('/', getJobs)

// /api/Jobs/JobsID
router.get('/:id', getJobsById )
router.delete('/:id', deleteJobs )
router.put('/:id', updateJobs)

export default router;