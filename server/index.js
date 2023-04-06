const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes.js');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser()); //sled static :16 line
app.use(authentication); // MUST after cookieParser and before routes 
app.use(routes);
//todo: change database name
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/car `);

app.listen(3100, () => console.log('Server is running on PORT 3100...'));