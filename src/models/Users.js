import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const Users = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    registered_number: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },  
    password: {
        type: Sequelize.STRING
    },  
    first_name: {
        type: Sequelize.STRING
    },    
    last_name: {
        type: Sequelize.STRING
    },   
    phone: {
        type: Sequelize.STRING
    }, 
    date_of_birth: {
        type: Sequelize.DATE
    }, 
    age: {
        type: Sequelize.INTEGER
    },  
    gender_id: {
        type: Sequelize.INTEGER
    },     
    adress: {
        type: Sequelize.STRING
    },   
    city: {
        type: Sequelize.STRING
    },       
    state: {
        type: Sequelize.STRING
    },  
    cell_phone: {
        type: Sequelize.STRING
    },   
    email: {
        type: Sequelize.STRING
    },   
    type: {
        type: Sequelize.STRING
    },   
    photo: {
        type: Sequelize.STRING
    },                  
    your_description: {
        type: Sequelize.STRING
    },                  
    biography_description: {
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

export default Users;