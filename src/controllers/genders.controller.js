import Genders from '../models/Genders';

export async function createGenderss(req, res){
 
    const {name} = req.body
    try {
        let newGenders = await Genders.create({
            name
        })
    
        if (newGenders){
            return res.json({
                message: 'Genders created successfully',
                data: newGenders
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

export async function getGenderss(req, res){
    try {

        const genders = await Genders.findAll();
        res.json({
            data: genders
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getGendersById(req, res){
    const {id} = req.params;
    const genders = await Genders.findOne({
        where:{
            id
        }
    })

    res.json(genders)
}

export async function deleteGenders(req, res){
    const {id}= req.params;
    const deleteRowCount = await Genders.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Genders deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateGenders(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const genders = await Genders.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (genders.length > 0){
        genders.forEach( async genders => {
            await genders.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'Genders Updated Successfully'
    })
}