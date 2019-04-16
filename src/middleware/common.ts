import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import * as bodyParser from 'body-parser';
var errorHandler = require('strong-error-handler');
import {hobbies} from "../routes/hobbies";
import {persons} from "../routes/persons";

export const handleCors = (router: Router) =>
    router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.urlencoded({ extended: true }));
    router.use(parser.json());
};

export const handleCompression = (router: Router) => {
    router.use(compression());
};

export const handleSequelize = (router: Router) => {
    // middleware for parsing application/x-www-form-urlencoded
    router.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
    router.use(bodyParser.json({limit: '5mb'}));

// enable corse for all origins
    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Expose-Headers", "x-total-count");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
        res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

        next();
    });

    router.use('/hobbies', hobbies);
    router.use('/persons', persons);

    router.use(errorHandler({
        debug: process.env.ENV !== 'prod',
        log: true,
    }));
};