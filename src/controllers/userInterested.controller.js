import UserInterested from '../models/UserInterested';

export async function createUserInterested(req, res){
 
    const {user_id, interested_description} = req.body
    try {
        let newUserInterested = await UserInterested.create({
            user_id, interested_description
        })
    
        if (newUserInterested){
            return res.json({
                message: 'UserInterested created successfully',
                data: newUserInterested
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

export async function getUserInterested(req, res){
    try {

        const userInterested = await UserInterested.findAll();
        res.json({
            data: userInterested
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUserInterestedById(req, res){
    const {id} = req.params;
    const userInterested = await UserInterested.findOne({
        where:{
            id
        }
    })

    res.json(userInterested)
}

export async function deleteUserInterested(req, res){
    const {id}= req.params;
    const deleteRowCount = await UserInterested.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'UserInterested deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUserInterested(req, res){
    const {id}= req.params;
    const { user_id, interested_description, active } = req.body;

    const userInterested = await UserInterested.findAll({
        attributes: ['id', 'user_id', 'interested_description', 'active'],
        where: {
            id
        }
    })

    if (userInterested.length > 0){
        userInterested.forEach( async userInterested => {
            await userInterested.update({
                user_id, 
                interested_description, 
                active
            })        
        });
    }

    return res.json({
        message: 'UserInterested Updated Successfully'
    })
}