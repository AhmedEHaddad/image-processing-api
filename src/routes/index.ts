import express from 'express';

const routes = express.Router();

// define a route handler for hompage
routes.get('/', (req, res) => {
    res.send('connected to the server. main api route');
});

// define a route handler for api/students

export default routes;