import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

// import Vacination from './Vacination'

const Documentation = sequelize.define('documentations',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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

// Documentation.hasMany(Vacination, { foreingKey: 'documentation_id', sourceKey: 'id'}) // deixei aqui de exemplo para quando for usar a ForeingKey
// Vacination.belongsTo(Documentation, foreingKey: 'documentation_id', sourceKey: 'id')

export default Documentation;