import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const UserVacinations = sequelize.define('user_vacinations',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    vacination_id: {
        type: Sequelize.INTEGER
    }, 
    active: {
        type: Sequelize.BOOLEAN
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
    imported_at: {
        type: Sequelize.DATE
    }
},{
    timestamps: false
})

export default UserVacinations;