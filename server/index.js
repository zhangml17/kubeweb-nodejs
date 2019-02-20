const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/',router);

app.listen(3000);
console.log('successful listening at port: 3000 ...');