import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const Jobs = sequelize.define('jobs',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nanny_id: {
        type: Sequelize.INTEGER
    },
    parent_id: {
        type: Sequelize.INTEGER
    },    
    adress: {
        type: Sequelize.STRING
    },    
    description: {
        type: Sequelize.STRING
    },   
    value: {
        type: Sequelize.FLOAT
    }, 
    initial_date: {
        type: Sequelize.DATE
    }, 
    final_date: {
        type: Sequelize.DATE
    }, 
    initial_hour: {
        type: Sequelize.DATE
    }, 
    final_hour: {
        type: Sequelize.DATE
    },         
    status_id: {
        type: Sequelize.INTEGER
    },  
    transaction_id: {
        type: Sequelize.INTEGER
    },     
    min_pay_value: {
        type: Sequelize.FLOAT
    },   
    max_pay_value: {
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

export default Jobs;