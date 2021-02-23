import JobsTags from '../models/JobsTags';

export async function createJobsTags(req, res){
 
    const {user_id, job_id, tag_id} = req.body
    try {
        let newJobsTags = await JobsTags.create({
            user_id, job_id, tag_id
        })
    
        if (newJobsTags){
            return res.json({
                message: 'JobsTags created successfully',
                data: newJobsTags
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

export async function getJobsTags(req, res){
    try {

        const jobsTags = await JobsTags.findAll();
        res.json({
            data: jobsTags
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getJobsTagsById(req, res){
    const {id} = req.params;
    const jobsTags = await JobsTags.findOne({
        where:{
            id
        }
    })

    res.json(jobsTags)
}

export async function deleteJobsTags(req, res){
    const {id}= req.params;
    const deleteRowCount = await JobsTags.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'JobsTags deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateJobsTags(req, res){
    const {id}= req.params;
    const { user_id, job_id, tag_id, active } = req.body;

    const jobsTags = await JobsTags.findAll({
        attributes: ['id', 'user_id', 'job_id', 'tag_id', 'active'],
        where: {
            id
        }
    })

    if (jobsTags.length > 0){
        jobsTags.forEach( async jobsTags => {
            await jobsTags.update({
                user_id, job_id, tag_id, 
                active
            })        
        });
    }

    return res.json({
        message: 'JobsTags Updated Successfully'
    })
}