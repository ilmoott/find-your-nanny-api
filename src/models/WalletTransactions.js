import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const WalletTransactions = sequelize.define('wallet_transactions',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_payment_method_from_id: {
        type: Sequelize.INTEGER
    },
    user_payment_method_to_id: {
        type: Sequelize.INTEGER
    },    
    value: {
        type: Sequelize.FLOAT
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

export default WalletTransactions;