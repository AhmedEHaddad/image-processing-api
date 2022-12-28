import express from 'express';
import routes from './routes/index'

// create an application object
const app = express();
// defint a port
const port = 3000;

//apply router middleware to application
app.use('/api', routes);


// define a route handler for hompage
app.get('/', (req, res) => {
    res.send('Hello, world!\n welcome to the server.');
});


//start the express server
app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
});