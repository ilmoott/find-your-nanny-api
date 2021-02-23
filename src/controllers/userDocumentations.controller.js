import UserDocumentations from '../models/UserDocumentations';

export async function createUserDocumentations(req, res){
 
    const {user_id, documentation_id} = req.body
    try {
        let newUserDocumentations = await UserDocumentations.create({
            user_id, documentation_id
        })
    
        if (newUserDocumentations){
            return res.json({
                message: 'UserDocumentations created successfully',
                data: newUserDocumentations
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

export async function getUserDocumentations(req, res){
    try {

        const userDocumentationss = await UserDocumentations.findAll();
        res.json({
            data: userDocumentationss
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUserDocumentationsById(req, res){
    const {id} = req.params;
    const userDocumentationss = await UserDocumentations.findOne({
        where:{
            id
        }
    })

    res.json(userDocumentationss)
}

export async function deleteUserDocumentations(req, res){
    const {id}= req.params;
    const deleteRowCount = await UserDocumentations.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'UserDocumentations deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUserDocumentations(req, res){
    const {id}= req.params;
    const { user_id, documentation_id, active } = req.body;

    const userDocumentationss = await UserDocumentations.findAll({
        attributes: ['id', 'user_id', 'documentation_id', 'active'],
        where: {
            id
        }
    })

    if (userDocumentationss.length > 0){
        userDocumentationss.forEach( async userDocumentationss => {
            await userDocumentationss.update({
                user_id, documentation_id, 
                active
            })        
        });
    }

    return res.json({
        message: 'userDocumentationss Updated Successfully'
    })
}