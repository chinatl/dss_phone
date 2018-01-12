const path = require('path');
const express = require('express');
const app = express();
// const url = '192.168.43.44';
var staticPath = path.join(__dirname + '/../build');
console.log(staticPath)
app.use(express.static(staticPath));
app.listen(8080,'20.204.7.212',()=>{
    console.log('running....');
});

