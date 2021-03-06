const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../database/controller/index.js');
const API_KEY = require('./config/api.js');

const app = express();
const port = 3001;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'client/dist');

// app.use(express.static('client/dist'));

app.use('/', express.static(PUBLIC_DIR));
app.use(bodyParser.json());

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
  if (req.params.genre === 'asian') {
    genreUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:"asian+americans+fiction"&orderBy=newest&printType=books&langRestrict=en&maxResults=40&key=${API_KEY}`;
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

// get user id
app.get('/api/userLogin', (req, res) => {
  const { user } = req.query;
  const { pw } = req.query;
  const query = `SELECT * FROM USERS WHERE users.username = '${user}' and users.pw = '${pw}' `;
  db.getInfo(query, (result) => {
    res.send(result);
  });
});

// get book info for specific user
app.get('/api/:user/bookinfo', (req, res) => {
  const { user } = req.params;
  const query = `SELECT * FROM userbooks FULL JOIN users on users.id = userbooks.userid WHERE users.username = '${user}' and userbooks.liked = 't'`;
  db.getInfo(query, (result) => {
    res.send(result);
  });
});

// make new user info
app.post('/api/user/new', (req, res) => {
  const query = 'INSERT INTO users (username, pw, firstname, lastname, location, email) values ($1, $2, $3, $4, $5, $6)';
  const values = [req.body.user, req.body.pw, req.body.firstname, req.body.lastname, req.body.location, req.body.email];
  db.addInfo(query, values, res);
});

// put book info for specific user
app.post('/api/:id/books/storeInfo', (req, res) => {
  const { id } = req.params;
  console.log('post book info in index.js', req.params.id, req.body);
  const query = 'INSERT INTO userbooks (userid, isbn, title, author, published, description, image, liked) values ($1, $2, $3, $4, $5, $6, $7, $8) on conflict (userid, isbn) do update set liked = EXCLUDED.liked';
  const values = [
    id,
    req.body.ibsn,
    req.body.title,
    req.body.author,
    req.body.published,
    req.body.description,
    req.body.image,
    req.body.liked,
  ];
  db.addInfo(query, values, res);
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
https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}

*/
