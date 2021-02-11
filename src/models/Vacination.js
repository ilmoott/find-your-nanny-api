import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const Vacination = sequelize.define('vacinations',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
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

export default Vacination;