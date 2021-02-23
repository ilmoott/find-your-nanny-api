import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const Tags = sequelize.define('tags',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    type: {
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

export default Tags;