import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'find_your_nanny',
    'postgres',
    '1234',
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)