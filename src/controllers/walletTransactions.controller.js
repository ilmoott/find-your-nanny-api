import WalletTransactions from '../models/WalletTransactions';

export async function createWalletTransactions(req, res){
 
    const {name} = req.body
    try {
        let newWalletTransactions = await WalletTransactions.create({
            name
        })
    
        if (newWalletTransactions){
            return res.json({
                message: 'WalletTransactions created successfully',
                data: newWalletTransactions
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

export async function getWalletTransactions(req, res){
    try {

        const walletTransactions = await WalletTransactions.findAll();
        res.json({
            data: walletTransactions
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getWalletTransactionsById(req, res){
    const {id} = req.params;
    const walletTransactions = await WalletTransactions.findOne({
        where:{
            id
        }
    })

    res.json(walletTransactions)
}

export async function deleteWalletTransactions(req, res){
    const {id}= req.params;
    const deleteRowCount = await WalletTransactions.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'WalletTransactions deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateWalletTransactions(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const walletTransactions = await WalletTransactions.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (walletTransactions.length > 0){
        walletTransactions.forEach( async walletTransactions => {
            await walletTransactions.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'WalletTransactions Updated Successfully'
    })
}