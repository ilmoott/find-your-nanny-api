import Tags from '../models/Tags';

export async function createTagss(req, res){
 
    const {name, type} = req.body
    try {
        let newTags = await Tags.create({
            name, type
        })
    
        if (newTags){
            return res.json({
                message: 'Tags created successfully',
                data: newTags
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

export async function getTagss(req, res){
    try {

        const tags = await Tags.findAll();
        res.json({
            data: tags
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getTagsById(req, res){
    const {id} = req.params;
    const tags = await Tags.findOne({
        where:{
            id
        }
    })

    res.json(tags)
}

export async function deleteTags(req, res){
    const {id}= req.params;
    const deleteRowCount = await Tags.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'Tags deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateTags(req, res){
    const {id}= req.params;
    const { name, type, active } = req.body;

    const tags = await Tags.findAll({
        attributes: ['id', 'name', 'active'],
        where: {
            id
        }
    })

    if (tags.length > 0){
        tags.forEach( async tags => {
            await tags.update({
                name, type, 
                active
            })        
        });
    }

    return res.json({
        message: 'Tags Updated Successfully'
    })
}