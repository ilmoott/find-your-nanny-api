import JobsStages from '../models/JobsStages';

export async function createJobsStages(req, res){
 
    const {job_id, tag_id} = req.body
    try {
        let newJobsStages = await JobsStages.create({
            job_id, tag_id
        })
    
        if (newJobsStages){
            return res.json({
                message: 'JobsStages created successfully',
                data: newJobsStages
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
 
}

export async function getJobsStages(req, res){
    try {

        const jobsStages = await JobsStages.findAll();
        res.json({
            data: jobsStages
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getJobsStagesById(req, res){
    const {id} = req.params;
    const jobsStages = await JobsStages.findOne({
        where:{
            id
        }
    })

    res.json(jobsStages)
}

export async function deleteJobsStages(req, res){
    const {id}= req.params;
    const deleteRowCount = await JobsStages.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'JobsStages deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateJobsStages(req, res){
    const {id}= req.params;
    const { job_id, tag_id, active } = req.body;

    const jobsStages = await JobsStages.findAll({
        attributes: ['id', 'job_id', 'tag_id', 'active'],
        where: {
            id
        }
    })

    if (jobsStages.length > 0){
        jobsStages.forEach( async jobsStages => {
            await jobsStages.update({
                job_id, 
                tag_id, 
                active
            })        
        });
    }

    return res.json({
        message: 'JobsStages Updated Successfully'
    })
}