const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes (to be added)
app.use('/api', require('./routes'));

// Default route
app.get('/', (req, res) => {
  res.send('Social Network API');
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/theSocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });









// const express = require('express')
// const mongoose = require('mongoose');
// const app = express()


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })


// mongoose.connect('mongodb://127.0.0.1:27017/theSocial')
//   .then(() => {
//     console.log('Connected!')
//     app.listen(3000)
// });

