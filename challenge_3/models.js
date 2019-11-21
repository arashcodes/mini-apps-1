const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'app3'
});

connection.connect();


module.exports = {
  addLogin: (callback, data) => {
    let queryVal = [data.name, data.email, data.password];
    let query = `insert login (name, email, password) values (?, ?, ?)`
    connection.query(query, queryVal, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },
  addAddress: (callback, data) =>{
    let queryVal = [data.line1, data.line2, data.city, data.state, data.zipCode, data.phone];
    let query = 'insert into address (line1, line2, city, state, zipCode, phone) values (?, ?, ?, ?, ?, ?)';
    connection.query(query, queryVal, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },
  addCredit: (callback, data) => {
    let queryVal = [data.credit, data.date, data.cvv, data.billingZip];
    let query = 'insert into credit (credit, date, cvv, billingZip) values (?, ?, ?, ?)';
    connection.query(query, queryVal, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}