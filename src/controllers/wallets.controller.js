import UserWallets from '../models/UserWallets';

export async function createUserWalletss(req, res){
 
    const {name} = req.body
    try {
        let newUserWallets = await UserWallets.create({
            name
        })
    
        if (newUserWallets){
            return res.json({
                message: 'UserWallets created successfully',
                data: newUserWallets
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

export async function getUserWalletss(req, res){
    try {

        const userWallets = await UserWallets.findAll();
        res.json({
            data: userWallets
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUserWalletsById(req, res){
    const {id} = req.params;
    const userWallets = await UserWallets.findOne({
        where:{
            id
        }
    })

    res.json(userWallets)
}

export async function deleteUserWallets(req, res){
    const {id}= req.params;
    const deleteRowCount = await UserWallets.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'UserWallets deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUserWallets(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const userWallets = await UserWallets.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (userWallets.length > 0){
        userWallets.forEach( async userWallets => {
            await userWallets.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'UserWallets Updated Successfully'
    })
}