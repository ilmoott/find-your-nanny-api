import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const CheckpointJobs = sequelize.define('checkpoint_jobs',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    job_id: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    hour: {
        type: Sequelize.TIME
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

export default CheckpointJobs;