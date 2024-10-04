require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3000;
const apiRoutes = require('./app/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(cors());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
   res.send('Welcome to social network node api !');
})

app.listen(port, () => {
   console.log("Server started on port: " + port);
})
