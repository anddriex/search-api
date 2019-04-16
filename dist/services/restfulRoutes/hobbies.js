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
const Hobby_1 = require("../../models/Hobby");
exports.hobbies = express_1.Router();
exports.hobbies.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const hobby = yield Hobby_1.Hobby.create(req.body);
        res.status(201).json(hobby);
    }
    catch (e) {
        next(e);
    }
}));
exports.hobbies.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield Hobby_1.Hobby.findAll());
    }
    catch (e) {
        next(e);
    }
}));
exports.hobbies.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const hobby = yield Hobby_1.Hobby.findByPk(req.params.id);
        res.json(hobby);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=hobbies.js.map