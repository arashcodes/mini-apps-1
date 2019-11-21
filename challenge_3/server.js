const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const Controllers = require('./controllers.js');

app.use('', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  Controllers.addLogin(req, res);
});

app.post('/address', (req, res) => {
  Controllers.addAddress(req, res);
})

app.post('/credit', (req, res) => {
  Controllers.addCredit(req, res);
})

app.listen(port, () => console.log('Listening on port ', port));

