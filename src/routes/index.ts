import express from 'express';
import students from './api/students';
import teachers from './api/teachers';

const routes = express.Router();

// define a route handler for hompage
routes.get('/', (req, res) => {
    res.send('connected to the server. main api route');
});

// define a route handler for api/students
routes.use('/students', students);
routes.use('/teachers', teachers);

export default routes;