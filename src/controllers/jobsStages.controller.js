import JobsStages from '../models/JobsStages';

export async function createJobsStagess(req, res){
 
    const {name} = req.body
    try {
        let newJobsStages = await JobsStages.create({
            name
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

export async function getJobsStagess(req, res){
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
    const { name, active } = req.body;

    const jobsStages = await JobsStages.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (jobsStages.length > 0){
        jobsStages.forEach( async jobsStages => {
            await jobsStages.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'CancelJutify Updated Successfully'
    })
}