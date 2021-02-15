import { Router } from 'express'

import { createCancelJobs, 
    getCancelJobs,
    getCancelJobsById,
    deleteCancelJobs,
    updateCancelJobs } from '../controllers/cancelJobs.controller'

const router = Router();
// /api/CancelJobs/
router.post('/', createCancelJobs) 
router.get('/', getCancelJobs)

// /api/CancelJobs/CancelJobsID
router.get('/:id', getCancelJobsById )
router.delete('/:id', deleteCancelJobs )
router.put('/:id', updateCancelJobs)

export default router;