import CancelJustify from '../models/CancelJustify';

export async function createCancelJustifys(req, res){
 
    const {name} = req.body
    try {
        let newCancelJustify = await CancelJustify.create({
            name
        })
    
        if (newCancelJustify){
            return res.json({
                message: 'CancelJustify created successfully',
                data: newCancelJustify
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

export async function getCancelJustifys(req, res){
    try {

        const cancelJustify = await CancelJustify.findAll();
        res.json({
            data: cancelJustify
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getCancelJustifyById(req, res){
    const {id} = req.params;
    const cancelJustify = await CancelJustify.findOne({
        where:{
            id
        }
    })

    res.json(cancelJustify)
}

export async function deleteCancelJustify(req, res){
    const {id}= req.params;
    const deleteRowCount = await CancelJustify.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'CancelJustify deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateCancelJustify(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const cancelJustify = await CancelJustify.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (cancelJustify.length > 0){
        cancelJustify.forEach( async cancelJustify => {
            await cancelJustify.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'CancelJutify Updated Successfully'
    })
}