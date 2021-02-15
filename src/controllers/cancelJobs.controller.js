import CancelJobs from '../models/CancelJobs';

export async function createCancelJobss(req, res){
 
    const {name} = req.body
    try {
        let newCancelJobs = await CancelJobs.create({
            name
        })
    
        if (newCancelJobs){
            return res.json({
                message: 'CancelJobs created successfully',
                data: newCancelJobs
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

export async function getCancelJobss(req, res){
    try {

        const cancelJobs = await CancelJobs.findAll();
        res.json({
            data: cancelJobs
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getCancelJobsById(req, res){
    const {id} = req.params;
    const cancelJobs = await CancelJobs.findOne({
        where:{
            id
        }
    })

    res.json(cancelJobs)
}

export async function deleteCancelJobs(req, res){
    const {id}= req.params;
    const deleteRowCount = await CancelJobs.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'CancelJobs deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateCancelJobs(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const cancelJobs = await CancelJobs.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (cancelJobs.length > 0){
        cancelJobs.forEach( async cancelJobs => {
            await cancelJobs.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'CancelJob Updated Successfully'
    })
}