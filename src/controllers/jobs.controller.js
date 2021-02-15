import Jobs from '../models/Jobs';

export async function createJobss(req, res){
 
    const {name} = req.body
    try {
        let newJobs = await Jobs.create({
            name
        })
    
        if (newJobs){
            return res.json({
                message: 'Jobs created successfully',
                data: newJobs
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

export async function getJobss(req, res){
    try {

        const jobs = await Jobs.findAll();
        res.json({
            data: jobs
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getJobsById(req, res){
    const {id} = req.params;
    const jobs = await Jobs.findOne({
        where:{
            id
        }
    })

    res.json(jobs)
}

export async function deleteJobs(req, res){
    const {id}= req.params;
    const deleteRowCount = await Jobs.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Jobs deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateJobs(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const jobs = await Jobs.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (jobs.length > 0){
        jobs.forEach( async jobs => {
            await jobs.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'Jobs Updated Successfully'
    })
}