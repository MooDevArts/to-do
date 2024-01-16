const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));

//db setup
const db = require('./config/mongoose');
const Contact = require('./models/task');

//use router (defined in routes -> indexjs)
const router = require('./routes');
app.use('/', router);

//setting the views 
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if (err){
        console.log(`Error: ${err}`);
    }

    console.log(`Running on port ${port}`);
});