import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const UserDisponibilities = sequelize.define('user_disponibilities',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    initial_week_day: {
        type: Sequelize.INTEGER
    },
    final_week_day: {
        type: Sequelize.INTEGER
    },
    initial_hour: {
        type: Sequelize.DATE
    },    
    final_hour: {
        type: Sequelize.DATE
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

export default UserDisponibilities;