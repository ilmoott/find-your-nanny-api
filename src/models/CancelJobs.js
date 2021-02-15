import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const CancelJobs = sequelize.define('cancel_jobs',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    job_id: {
        type: Sequelize.INTEGER
    },
    cancel_id: {
        type: Sequelize.INTEGER
    },    
    comments: {
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

export default CancelJobs;