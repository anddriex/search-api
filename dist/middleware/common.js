"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const bodyParser = __importStar(require("body-parser"));
let errorHandler = require('strong-error-handler');
const hobbies_1 = require("../services/restfulRoutes/hobbies");
const persons_1 = require("../services/restfulRoutes/persons");
exports.handleCors = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
exports.handleBodyRequestParsing = (router) => {
    router.use(body_parser_1.default.urlencoded({ extended: true }));
    router.use(body_parser_1.default.json());
};
exports.handleCompression = (router) => {
    router.use(compression_1.default());
};
exports.handleSequelize = (router) => {
    // middleware for parsing application/x-www-form-urlencoded
    router.use(bodyParser.urlencoded({ extended: true }));
    // middleware for json body parsing
    router.use(bodyParser.json({ limit: '5mb' }));
    // enable corse for all origins
    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Expose-Headers", "x-total-count");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
        res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
        next();
    });
    router.use('/hobbies', hobbies_1.hobbies);
    router.use('/persons', persons_1.persons);
    router.use(errorHandler({
        debug: process.env.ENV !== 'prod',
        log: true,
    }));
};
//# sourceMappingURL=common.js.map