import { Router } from 'express'

import { createCheckpointJobs, 
    getCheckpointJobs,
    getCheckpointJobsById,
    deleteCheckpointJobs,
    updateCheckpointJobs } from '../controllers/checkpointJobs.controller'

const router = Router();
// /api/CheckpointJobs/
router.post('/', createCheckpointJobs) 
router.get('/', getCheckpointJobs)

// /api/CheckpointJobs/CheckpointJobsID
router.get('/:id', getCheckpointJobsById )
router.delete('/:id', deleteCheckpointJobs )
router.put('/:id', updateCheckpointJobs)

export default router;