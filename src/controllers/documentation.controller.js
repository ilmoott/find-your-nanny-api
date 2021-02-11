import Documentation from '../models/Documentation';

export async function createDocumentations(req, res){
 
    const {name} = req.body
    try {
        let newDocumentation = await Documentation.create({
            name
        })
    
        if (newDocumentation){
            return res.json({
                message: 'Documentation created successfully',
                data: newDocumentation
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

export async function getDocumentations(req, res){
    try {

        const documentations = await Documentation.findAll();
        res.json({
            data: documentations
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getDocumentationById(req, res){
    const {id} = req.params;
    const documentation = await Documentation.findOne({
        where:{
            id
        }
    })

    res.json(documentation)
}

export async function deleteDocumentation(req, res){
    const {id}= req.params;
    const deleteRowCount = await Documentation.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Documentation deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateDocumentation(req, res){
    const {id}= req.params;
    const { name, active } = req.body;

    const documentations = await Documentation.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (documentations.length > 0){
        documentations.forEach( async documentation => {
            await documentation.update({
                name, 
                active
            })        
        });
    }

    return res.json({
        message: 'Vacination Updated Successfully'
    })
}