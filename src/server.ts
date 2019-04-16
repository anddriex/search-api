import {sequelize} from "./sequelize";
import {app} from './app';
import {createServer} from 'http';

const {PORT = 3000} = process.env;


(async () => {
    await sequelize.sync({force: true});
    createServer(app).listen(PORT, () =>
        console.log(`Server is running http://localhost:${PORT}...`)
    );
})();
