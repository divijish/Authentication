const express = require('express')

const app = express();

function middleware1(req, res, next){
    console.log("I am middleware1.");
    const errObj = new Error('I am an error');

    next (errObj);
}

function errorHandler(err, req, res, next){
    if(err){
        res.send('<h1> There was an error, please try again</h1>');
    }
}

function standardExpressCallback(requestObject, responseObject, nextMiddleWare){
    console.log('I am standardExpressCallback.');
    responseObject.send('<h1> Hello World! </h1>');
}

app.get('/', middleware1, standardExpressCallback);

app.listen(3000);

