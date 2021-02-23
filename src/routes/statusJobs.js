import { Router } from 'express'

import { createStatusJobs, 
    getStatusJobs,
    getStatusJobsById,
    deleteStatusJobs,
    updateStatusJobs } from '../controllers/statusJobs.controller'

const router = Router();
// /api/StatusJobs/
router.post('/', createStatusJobs) 
router.get('/', getStatusJobs)

// /api/StatusJobs/StatusJobsID
router.get('/:id', getStatusJobsById )
router.delete('/:id', deleteStatusJobs )
router.put('/:id', updateStatusJobs)

export default router;