import CheckpointJobs from '../models/CheckpointJobs';

export async function createCheckpointJobss(req, res){
 
    const {job_id, description, date, hour} = req.body
    try {
        let newCheckpointJobs = await CheckpointJobs.create({
            job_id, description, date, hour
        })
    
        if (newCheckpointJobs){
            return res.json({
                message: 'CheckpointJobs created successfully',
                data: newCheckpointJobs
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

export async function getCheckpointJobss(req, res){
    try {

        const checkpointJobs = await CheckpointJobs.findAll();
        res.json({
            data: checkpointJobs
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getCheckpointJobsById(req, res){
    const {id} = req.params;
    const checkpointJobs = await CheckpointJobs.findOne({
        where:{
            id
        }
    })

    res.json(checkpointJobs)
}

export async function deleteCheckpointJobs(req, res){
    const {id}= req.params;
    const deleteRowCount = await CheckpointJobs.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'CheckpointJobs deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateCheckpointJobs(req, res){
    const {id}= req.params;
    const { job_id, description, date, hour, active } = req.body;

    const checkpointJobs = await CheckpointJobs.findAll({
        attributes: ['id', 'job_id', 'description', 'date', 'hour', 'active'],
        where: {
            id
        }
    })

    if (checkpointJobs.length > 0){
        checkpointJobs.forEach( async checkpointJobs => {
            await checkpointJobs.update({
                job_id, 
                description, 
                date, 
                hour,
                active
            })        
        });
    }

    return res.json({
        message: 'CheckPoint Updated Successfully'
    })
}