import Vacination from '../models/Vacination';

export async function createVacinations(req, res){
 
    const {name} = req.body 
    try {
        let newVacination = await Vacination.create({
            name
        },
        {fields:['name']}
        )
    
        if (newVacination){
            return res.json({
                message: 'Vacination created successfully',
                data: newVacination
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

export async function getVacinations(req, res){
    try {

        const vacinations = await Vacination.findAll();
        res.json({
            data: vacinations
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getVacinationById(req, res){
    const {id} = req.params;
    const vacination = await Vacination.findOne({
        where:{
            id
        }
    })

    res.json(vacination)
}

export async function deleteVacination(req, res){
    const {id}= req.params;
    const deleteRowCount = await Vacination.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Vacination deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateVacination(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const vacinations = await Vacination.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (vacinations.length > 0){
        vacinations.forEach( async vacination => {
            await vacination.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'Vacination Updated Successfully'
    })
}