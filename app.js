const express = require('express')

const app = express();


app.use(middleware1);
app.use(middleware2);

function middleware1(req, res, next){
    console.log("I am middleware 1.");
    req.customProp = 100;
    next ();
}

function middleware2(req, res, next){
    console.log("I am middleware 2.");
    console.log(`Customer Property: ${req.customProp}`);
    req.customProp = 200;
    next();
}

function errorHandler(err, req, res, next){
    if(err){
        res.json({err:err});
    }
}

function standardExpressCallback(requestObject, responseObject, nextMiddleWare){
    console.log('I am standardExpressCallback.');
    responseObject.send(`<h1> Hello World! ${requestObject.customProp}</h1>`);
}

app.get('/',  standardExpressCallback);

app.use(errorHandler);

app.listen(3000);

