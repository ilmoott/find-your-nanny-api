import UserVacinations from '../models/UserVacinations';

export async function createUserVacinationss(req, res){
 
    const {user_id, vacination_id} = req.body
    try {
        let newUserVacinations = await UserVacinations.create({
            user_id, vacination_id
        })
    
        if (newUserVacinations){
            return res.json({
                message: 'UserVacinations created successfully',
                data: newUserVacinations
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

export async function getUserVacinationss(req, res){
    try {

        const userVacinations = await UserVacinations.findAll();
        res.json({
            data: userVacinations
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
        
    }
}

export async function getUserVacinationsById(req, res){
    const {id} = req.params;
    const userVacinations = await UserVacinations.findOne({
        where:{
            id
        }
    })

    res.json(userVacinations)
}

export async function deleteUserVacinations(req, res){
    const {id}= req.params;
    const deleteRowCount = await UserVacinations.destroy({
        where:{
            id
        }
    })
    res.json({
        message: 'UserVacinations deleted succesfully',
        count: deleteRowCount

    })
}

export async function updateUserVacinations(req, res){
    const {id}= req.params;
    const { user_id, vacination_id, active } = req.body;

    const userVacinations = await UserVacinations.findAll({
        attributes: ['id', 'user_id', 'vacination_id', 'active'],
        where: {
            id
        }
    })

    if (userVacinations.length > 0){
        userVacinations.forEach( async userVacinations => {
            await userVacinations.update({
                user_id, 
                vacination_id, 
                active
            })        
        });
    }

    return res.json({
        message: 'UserVacinations Updated Successfully'
    })
}