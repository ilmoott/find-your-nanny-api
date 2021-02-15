import UserDisponibilities from '../models/UserDisponibilities';

export async function createUserDisponibilitiess(req, res){
 
    const {name} = req.body
    try {
        let newUserDisponibilities = await UserDisponibilities.create({
            name
        })
    
        if (newUserDisponibilities){
            return res.json({
                message: 'UserDisponibilities created successfully',
                data: newUserDisponibilities
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

export async function getUserDisponibilitiess(req, res){
    try {

        const userDisponibilities = await UserDisponibilities.findAll();
        res.json({
            data: userDisponibilities
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUserDisponibilitiesById(req, res){
    const {id} = req.params;
    const userDisponibilities = await UserDisponibilities.findOne({
        where:{
            id
        }
    })

    res.json(userDisponibilities)
}

export async function deleteUserDisponibilities(req, res){
    const {id}= req.params;
    const deleteRowCount = await UserDisponibilities.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'UserDisponibilities deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUserDisponibilities(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const userDisponibilities = await UserDisponibilities.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (userDisponibilities.length > 0){
        userDisponibilities.forEach( async userDisponibilities => {
            await userDisponibilities.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'UserDisponibilities Updated Successfully'
    })
}