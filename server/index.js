const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const routes = require('./routes.js');
//const { authentication } = require('./middlewares/authMiddleware');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cookieParser()); //sled static :16 line
//app.use(authentication); // MUST after cookieParser and before routes 
app.use(routes);
//todo: change database name
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/car `);

app.listen(5000, () => console.log('Server is running on PORT 5000...'));