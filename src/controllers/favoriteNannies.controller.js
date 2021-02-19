import FavoriteNannies from '../models/FavoriteNannies';

export async function createFavoriteNanniess(req, res){
 
    const {parent_id, nanny_id, value} = req.body
    try {
        let newFavoriteNannies = await FavoriteNannies.create({
            parent_id, nanny_id, value
        })
    
        if (newFavoriteNannies){
            return res.json({
                message: 'FavoriteNannies created successfully',
                data: newFavoriteNannies
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

export async function getFavoriteNanniess(req, res){
    try {

        const favoriteNannies = await FavoriteNannies.findAll();
        res.json({
            data: favoriteNannies
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getFavoriteNanniesById(req, res){
    const {id} = req.params;
    const favoriteNannies = await FavoriteNannies.findOne({
        where:{
            id
        }
    })

    res.json(favoriteNannies)
}

export async function deleteFavoriteNannies(req, res){
    const {id}= req.params;
    const deleteRowCount = await FavoriteNannies.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'FavoriteNannies deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateFavoriteNannies(req, res){
    const {id}= req.params;
    const { parent_id, nanny_id, value, active } = req.body;

    const favoriteNannies = await FavoriteNannies.findAll({
        attributes: ['id', 'parent_id', 'nanny_id', 'value', 'active'],
        where: {
            id
        }
    })

    if (favoriteNannies.length > 0){
        favoriteNannies.forEach( async favoriteNannies => {
            await favoriteNannies.update({
                parent_id, 
                nanny_id, 
                value,
                active
            })        
        });
    }

    return res.json({
        message: 'FavoriteNannies Updated Successfully'
    })
}