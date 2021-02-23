import Stages from '../models/Stages';

export async function createStages(req, res){
 
    const {name} = req.body
    try {
        let newStages = await Stages.create({
            name
        })
    
        if (newStages){
            return res.json({
                message: 'Stages created successfully',
                data: newStages
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

export async function getStages(req, res){
    try {

        const stages = await Stages.findAll();
        res.json({
            data: stages
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getStagesById(req, res){
    const {id} = req.params;
    const stages = await Stages.findOne({
        where:{
            id
        }
    })

    res.json(stages)
}

export async function deleteStages(req, res){
    const {id}= req.params;
    const deleteRowCount = await Stages.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Stages deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateStages(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const stages = await Stages.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (stages.length > 0){
        stages.forEach( async stages => {
            await stages.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'Stages Updated Successfully'
    })
}