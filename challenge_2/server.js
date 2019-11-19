const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/client')));

app.post('/data', (req, res) => {
  res.send(console.log(req.body));
})

app.listen(port, () => console.log(`Listening on port ${port}`));

