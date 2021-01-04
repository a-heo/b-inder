const pool = require('../model/index.js');

const getInfo = (query, callback) => {
  pool
    .query(query)
    .then((res) => {
      callback(res.rows);
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(500);
    });
};

const addInfo = (query, values, res) => {
  pool
    .query(query, values)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(500);
    });
};

module.exports = {
  getInfo,
  addInfo,
};
