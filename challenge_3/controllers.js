const Models = require('./models.js');

module.exports = {
  addLogin: (req, res) => {
    Models.addLogin((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, req.body)
  },
  addAddress: (req, res) => {
    Models.addAddress((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, req.body)
  },
  addCredit: (req, res) => {
    Models.addCredit((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, req.body)
  }
}