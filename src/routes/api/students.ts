import express from 'express';
const students = express.Router();


// define a route handler for api/students
students.get('/', (req, res) => {
    res.send('connected to the server. students route');
});

export default students;