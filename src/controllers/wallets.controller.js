import Wallets from '../models/Wallets';

export async function createWallets(req, res){
 
    const {name} = req.body
    try {
        let newWallets = await Wallets.create({
            name
        })
    
        if (newWallets){
            return res.json({
                message: 'Wallets created successfully',
                data: newWallets
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

export async function getWallets(req, res){
    try {

        const userWallets = await Wallets.findAll();
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

export async function getWalletById(req, res){
    const {id} = req.params;
    const userWallets = await Wallets.findOne({
        where:{
            id
        }
    })

    res.json(userWallets)
}

export async function deleteWallet(req, res){
    const {id}= req.params;
    const deleteRowCount = await Wallets.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Wallets deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateWallet(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const userWallets = await Wallets.findAll({
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
        message: 'Wallet Updated Successfully'
    })
}