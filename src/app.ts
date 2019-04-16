import express from 'express';
import {applyMiddleware, applyRoutes} from "./utils";
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './services';
process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});

process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});
export const app = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);
