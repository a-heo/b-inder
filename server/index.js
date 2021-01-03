const express = require('express');
const axios = require('axios');
const db = require('../database/controller/index.js');
const API_KEY = require('./config/api.js');

const app = express();
const port = 3001;

app.use(express.static('client/dist'));

// get book info
app.get('/api/books/:genre', (req, res) => {
  let genreUrl = '';
  if (req.params.genre === 'juvenile') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"juvenile+fiction"+inpublisher:"random+house"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&zoom=3&key=${API_KEY}`;
  }
  if (req.params.genre === 'fiction') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"fiction"+inpublisher:"riverhead"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&key=${API_KEY}`;
  }
  if (req.params.genre === 'graphic') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"graphic+novels"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&key=${API_KEY}`;
  }
  if (req.params.genre === 'mystery') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"mystery"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&key=${API_KEY}`;
  }
  if (req.params.genre === 'fantasy') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"fantasy"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&key=${API_KEY}`;
  }
  if (req.params.genre === 'youngadult') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"young+adult+fiction"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&key=${API_KEY}`;
  }

  axios.get(genreUrl)
    .then((data) => {
      res.send(data.data.items);
    })
    .catch((error) => {
      console.log('error', error);
      res.status(404);
    });
});

// get book info for specific user
app.get('/api/user/:username/:pw', (req, res) => {
  const { username } = req.params;
  const { pw } = req.params;
  const query = `SELECT * FROM userbooks LEFT JOIN users on users.id = userbooks.userid WHERE users.username = '${username}' and users.pw = '${pw}'`;
  db.getInfo(query, (result) => {
    res.send(result);
  });
});

// post user info
app.post('/api/:username/:pw', (req, res) => {
  const { username } = req.params;
  const { pw } = req.params;
  const query = 'INSERT INTO users (username, pw) values ($1, $2)';
  const values = [username, pw];
  db.addInfo(query, values, res);
});

// put book info for specific user
app.post('api/user/:info', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

/*
juvenile fiction
https://www.googleapis.com/books/v1/volumes?q=subject:"juvenile+fiction"+inpublisher:"random+house"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

fiction
https://www.googleapis.com/books/v1/volumes?q=subject:"fiction"+inpublisher:"riverhead"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

graphic novels
https://www.googleapis.com/books/v1/volumes?q=subject:"graphic+novels"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

mystery
https://www.googleapis.com/books/v1/volumes?q=subject:"mystery"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

fantasy
https://www.googleapis.com/books/v1/volumes?q=subject:"fantasy"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

youngadult
https://www.googleapis.com/books/v1/volumes?q=subject:"young+adult+fiction"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

asian
https://www.googleapis.com/books/v1/volumes?q=subject:"asian+americans+fiction"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

black
https://www.googleapis.com/books/v1/volumes?q=subject:"african+american+fiction"&orderBy=newest&printType=books&langRestrict=en&key=${API_KEY}

searchbyibsn
https://www.googleapis.com/books/v1/volumes?q=isbn:9780593181478&key=${API_KEY}

*/
