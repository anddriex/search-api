"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: 'test2',
    dialect: 'postgres',
    username: 'postgres',
    password: 'sublimean',
    modelPaths: [__dirname + '/models']
});
exports.sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=sequelize.js.map