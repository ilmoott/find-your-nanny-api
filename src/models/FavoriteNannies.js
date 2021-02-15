import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const FavoriteNannies = sequelize.define('favorite_nannies',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    parent_id: {
        type: Sequelize.INTEGER
    },
    nanny_id: {
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

export default FavoriteNannies;