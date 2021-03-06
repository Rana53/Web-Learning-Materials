const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');
const fileHandle = require('./api/routes/file-handle');
const placeRoutes = require('./api/routes/place');
const dbURL  = 'mongodb+srv://node-shop:node-shop@cluster0-y2tlm.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(morgan('dev'));
app.use(express.static('uploads/places'));
mongoose.connect(dbURL,{ useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('connected', function(){
    console.log("Database connected");
 });
 mongoose.connection.on('error', function(err){
     console.log("Mongoose default connection has occured "+err+" error");
});
mongoose.connection.on('disconnected', function(){
     console.log("Mongoose default connection is disconnected");
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);
app.use('/file-handle',fileHandle);
app.use('/travel-and-tour/places', placeRoutes); // for practices router should be project name then route
app.use((req, res, next) => {
    const error = new Error('request not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
