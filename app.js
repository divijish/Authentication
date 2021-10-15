const express = require('express')

const app = express();

function middleware1(req, res, next){
    console.log("I am middleware1.");
    next();
    //res.send('<h2> hello.</h2>');
}

function standardExpressCallback(requestObject, responseObject, nextMiddleWare){
    console.log('I am standardExpressCallback.');
    responseObject.send('<h1> Hello World! </h1>');
}

app.get('/', middleware1, standardExpressCallback);

app.listen(3000);

