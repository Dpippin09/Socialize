const express = require('express')
const mongoose = require('mongoose');
const app = express()


app.get('/', function (req, res) {
  res.send('Hello World')
})


mongoose.connect('mongodb://127.0.0.1:27017/theSocial')
  .then(() => {
    console.log('Connected!')
    app.listen(3000)
});

