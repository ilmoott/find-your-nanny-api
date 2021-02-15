import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const UserDocumentation = sequelize.define('user_documentation',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    documentation_id: {
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

export default UserDocumentation;