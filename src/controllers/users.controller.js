import Users from '../models/Users';

export async function createUserss(req, res){
 
    const {name} = req.body
    try {
        let newUsers = await Users.create({
            name
        })
    
        if (newUsers){
            return res.json({
                message: 'Users created successfully',
                data: newUsers
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

export async function getUserss(req, res){
    try {

        const users = await Users.findAll();
        res.json({
            data: users
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUsersById(req, res){
    const {id} = req.params;
    const users = await Users.findOne({
        where:{
            id
        }
    })

    res.json(users)
}

export async function deleteUsers(req, res){
    const {id}= req.params;
    const deleteRowCount = await Users.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Users deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUsers(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const users = await Users.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (users.length > 0){
        users.forEach( async users => {
            await users.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'CancelJutify Updated Successfully'
    })
}