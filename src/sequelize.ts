import {Sequelize} from "sequelize-typescript";

export const sequelize = new Sequelize({
    database:'test2',
    dialect: 'postgres',
    username:'postgres',
    password: 'sublimean',
    modelPaths: [__dirname + '/models']
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });