const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes.js');

const app = express();

let database = process.env.MONGODB_URI || 'mongodb://localhost:27017/hatdb';
mongoose.connect(database);

app.engine('handlebars', handlebars({defaultLayout: 'app'}));
// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// bootstrap static
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'handlebars');

router(app);

app.listen(process.env.PORT || 3000);
