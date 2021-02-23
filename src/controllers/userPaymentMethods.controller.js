import UserPaymentMethods from '../models/UserPaymentMethods';

export async function createUserPaymentMethods(req, res){
 
    const {payment_method_id, user_id, type, agency, account, favorite} = req.body
    try {
        let newUserPaymentMethods = await UserPaymentMethods.create({
            payment_method_id, 
            user_id, 
            type, 
            agency, 
            account,
            favorite
        })
    
        if (newUserPaymentMethods){
            return res.json({
                message: 'UserPaymentMethods created successfully',
                data: newUserPaymentMethods
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

export async function getUserPaymentMethods(req, res){
    try {

        const userPaymentMethods = await UserPaymentMethods.findAll();
        res.json({
            data: userPaymentMethods
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUserPaymentMethodsById(req, res){
    const {id} = req.params;
    const userPaymentMethods = await UserPaymentMethods.findOne({
        where:{
            id
        }
    })

    res.json(userPaymentMethods)
}

export async function deleteUserPaymentMethods(req, res){
    const {id}= req.params;
    const deleteRowCount = await UserPaymentMethods.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'UserPaymentMethods deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUserPaymentMethods(req, res){
    const {id}= req.params;
    const { payment_method_id, 
        user_id, 
        type, 
        agency, 
        account,
        favorite, active } = req.body;

    const userPaymentMethods = await UserPaymentMethods.findAll({
        attributes: ['id', 
        'payment_method_id', 
        'user_id', 
        'type', 
        'agency', 
        'account',
        'favorite', 'active'],
        where: {
            id
        }
    })

    if (userPaymentMethods.length > 0){
        userPaymentMethods.forEach( async userPaymentMethods => {
            await userPaymentMethods.update({
                payment_method_id, 
                user_id, 
                type, 
                agency, 
                account,
                favorite, 
                active
            })        
        });
    }

    return res.json({
        message: 'UserPaymentMethods Updated Successfully'
    })
}