import express from 'express';

// create an application object
const app = express();
// defint a port
const port = 3000;


// define a route handler for hompage
app.get('/api', (req, res) => {
    res.send('Hello, world!\n welcome to the server.');
});

//start the express server
app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
});