import WalletTransactions from '../models/WalletTransactions';

export async function createWalletTransactions(req, res){
 
    const {user_payment_method_from_id, user_payment_method_to_id, value} = req.body
    try {
        let newWalletTransactions = await WalletTransactions.create({
            user_payment_method_from_id, 
            user_payment_method_to_id, 
            value
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
    const { user_payment_method_from_id, user_payment_method_to_id, value, active } = req.body;

    const walletTransactions = await WalletTransactions.findAll({
        attributes: ['id', 'user_payment_method_from_id', 'user_payment_method_to_id', 'value', 'active'],
        where: {
            id
        }
    })

    if (walletTransactions.length > 0){
        walletTransactions.forEach( async walletTransactions => {
            await walletTransactions.update({
                user_payment_method_from_id, 
                user_payment_method_to_id, 
                value, 
                active
            })        
        });
    }

    return res.json({
        message: 'WalletTransactions Updated Successfully'
    })
}