"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Person_1 = require("../../models/Person");
exports.persons = express_1.Router();
exports.persons.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const person = yield Person_1.Person.create(req.body);
        res.status(201).json(person);
    }
    catch (e) {
        next(e);
    }
}));
exports.persons.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield Person_1.Person.findAll().then(persons => {
            console.log('All persons: ', JSON.stringify(persons, null, 4));
        }));
    }
    catch (e) {
        next(e);
    }
}));
exports.persons.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const person = yield Person_1.Person.findByPk(req.params.id);
        res.json(person);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=persons.js.map