import { Router } from  'express';
import { Hobby } from "../models/Hobby";

export const hobbies = Router();

hobbies.post('/', async (req, res, next) => {
    try {
        const hobby = await Hobby.create(req.body);
        res.status(201).json(hobby);
    } catch (e) {
        next(e);
    }
});


hobbies.get('', async (req, res, next) => {
    try {
        res.json(await Hobby.scope(req.query['scope']).findAll());
    } catch (e) {
        next(e);
    }
});

hobbies.get('/:id', async (req, res, next) => {
   try {
       const hobby = await Hobby.scope(req.query['scope']).findByPk(req.params['id']);
       res.json(hobby);
   } catch (e) {
       next(e);
   }
});