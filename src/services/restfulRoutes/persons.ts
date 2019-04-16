import { Router } from 'express';
import {Person} from "../../models/Person";

export const persons = Router();

persons.post('/', async (req, res, next) => {
    try {
        const person = await Person.create(req.body);
        res.status(201).json(person)
    } catch (e) {
        next(e);
    }
});

persons.get('/', async (req, res,next) => {
    try {
        res.json(await Person.findAll().then(persons => {
            console.log('All persons: ', JSON.stringify(persons, null,4))
        }));
    } catch (e) {
        next(e);
    }
});

persons.get('/:id', async (req, res,next) => {
    try {
        const person = await Person.findByPk(req.params.id);
        res.json(person);
    } catch (e) {
        next(e);
    }
});

