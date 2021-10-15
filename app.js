const express = require('express')

const app = express();

app.use(middleware1);
app.use(middleware2);

function middleware1( req, res, next){
    console.log("I am middleware 1.");
    next();
    //res.send('<h2> hello.</h2>');
}



function middleware2( req, res, next){
    console.log("I am middleware 2.");
    next();
    //res.send('<h2> hello.</h2>');
}

function standardExpressCallback(requestObject, responseObject, nextMiddleWare){
    console.log('I am standardExpressCallback.');
    responseObject.send('<h1> Hello World! </h1>');
}

app.get('/',  standardExpressCallback);

app.listen(3000);

