import { Router } from 'express'

import { createJobsStages, 
    getJobsStages,
    getJobsStagesById,
    deleteJobsStages,
    updateJobsStages } from '../controllers/jobsStages.controller'

const router = Router();
// /api/JobsStages/
router.post('/', createJobsStages) 
router.get('/', getJobsStages)

// /api/JobsStages/JobsStagesID
router.get('/:id', getJobsStagesById )
router.delete('/:id', deleteJobsStages )
router.put('/:id', updateJobsStages)

export default router;