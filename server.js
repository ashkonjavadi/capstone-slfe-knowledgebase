const  express = require('express');
const  mongoose = require('mongoose');
const  bodyParser = require('body-parser');

const enterprises = require('./routes/api/enterprises');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to db...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/enterprises', enterprises);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));