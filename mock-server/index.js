const express = require('express');
const app = express();
const cat = require('./cat');

app.use('/cat', cat);
app.listen(9000);
