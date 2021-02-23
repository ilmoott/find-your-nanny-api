import PaymentMethods from '../models/PaymentMethods';

export async function createPaymentMethods(req, res){
 
    const {name} = req.body
    try {
        let newPaymentMethods = await PaymentMethods.create({
            name
        })
    
        if (newPaymentMethods){
            return res.json({
                message: 'PaymentMethods created successfully',
                data: newPaymentMethods
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

export async function getPaymentMethods(req, res){
    try {

        const paymentMethods = await PaymentMethods.findAll();
        res.json({
            data: paymentMethods
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getPaymentMethodsById(req, res){
    const {id} = req.params;
    const paymentMethods = await PaymentMethods.findOne({
        where:{
            id
        }
    })

    res.json(paymentMethods)
}

export async function deletePaymentMethods(req, res){
    const {id}= req.params;
    const deleteRowCount = await PaymentMethods.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'PaymentMethods deleted succesfully',
        count: deleteRowCount

    })
}

export async function updatePaymentMethods(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const paymentMethods = await PaymentMethods.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (paymentMethods.length > 0){
        paymentMethods.forEach( async paymentMethods => {
            await paymentMethods.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'PaymentMethods Updated Successfully'
    })
}