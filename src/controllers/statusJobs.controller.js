import StatusJobs from '../models/StatusJobs';

export async function createStatusJobss(req, res){
 
    const {name} = req.body
    try {
        let newStatusJobs = await StatusJobs.create({
            name
        })
    
        if (newStatusJobs){
            return res.json({
                message: 'StatusJobs created successfully',
                data: newStatusJobs
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

export async function getStatusJobss(req, res){
    try {

        const statusJobs = await StatusJobs.findAll();
        res.json({
            data: statusJobs
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getStatusJobsById(req, res){
    const {id} = req.params;
    const statusJobs = await StatusJobs.findOne({
        where:{
            id
        }
    })

    res.json(statusJobs)
}

export async function deleteStatusJobs(req, res){
    const {id}= req.params;
    const deleteRowCount = await StatusJobs.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'StatusJobs deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateStatusJobs(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const statusJobs = await StatusJobs.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (statusJobs.length > 0){
        statusJobs.forEach( async statusJobs => {
            await statusJobs.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'StatusJobs Updated Successfully'
    })
}