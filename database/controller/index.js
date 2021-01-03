const pool = require('../model/index.js');

const getInfo = (query, callback) => {
  pool
    .query(query)
    .then((res) => {
      callback(res.rows);
    })
    .catch((e) => {
      console.log(e);
    });
};

const addInfo = (query, values, callback) => {
  pool
    .query(query, values)
    .then((res) => {
      callback(res.rows);
    });
};

module.exports = {
  getInfo,
};
