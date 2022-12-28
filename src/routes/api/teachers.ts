import express from 'express';
const teachers = express.Router();


// define a route handler for api/teachers
teachers.get('/', (req, res) => {
    res.send('connected to the server. teachers route');
});

export default teachers;