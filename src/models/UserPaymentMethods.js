import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const UserPaymentMethods = sequelize.define('user_payment_methods',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    payment_method_id: {
        type: Sequelize.INTEGER
    },    
    type: {
        type: Sequelize.STRING
    },    
    agency: {
        type: Sequelize.STRING
    },
    account: {
        type: Sequelize.STRING
    },       
    favorite: {
        type: Sequelize.BOOLEAN
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

export default UserPaymentMethods;