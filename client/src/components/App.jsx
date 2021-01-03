import React, { useState } from 'react';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Login from './Login';
import NewLogin from './NewLogin';
import SignIn from './SignIn';
import Genres from './Genres';

const axios = require('axios');

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCF8E8;
    display: flex;
    flex-direction: column;
    font-family: 'bungee';
    color: #433D3C;
  }
  button {
    font-family: 'bungee';
    font-size: 25px;
    width: auto; 
    cursor:pointer; 
    background-color: #83A95C;
    font-size: 24px; 
    border: 2px #70af85; 
    border-radius: 5px;
  }
`;

const Title = styled.h1`
    font-size: 125px; 
    text-align: center;
    color: #f18c8e;
`;

const Box = styled.div`
    justify-content: center;
`;

const App = () => {
  const [login, enterLogin] = useState(false);
  const [data, setData] = useState([]);
  const [user, changeUser] = useState('');
  const [userBooks, changeUserBooks] = useState([]);

  const loadSlider = (genre) => {
    axios.get(`api/books/${genre}`)
      .then((response) => {
        // filter data with only those that have volumeinfo
        const books =
          response.data.filter((book) =>
            book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail);
        setData(books);
      })
      .catch((error) => {
        console.log(error, 'loadslider unable to be retrieve');
      });
  };

  const loadUserInfo = (info) => {
    axios.get(`api/books/`)
  }

  const gatherUserInfo = (username) => {
    axios.get(`api/user/${username}`)
      .then((response) => {
        changeUserBooks(response.data);
        changeUser(username);
      })
      .catch((error) => {
        console.log(error, 'userinfo unable to be retrieved');
      });
  };

  return (
    <div>
      <GlobalStyle />
      {login ? (
        <div>
          <Login login={login} enterLogin={enterLogin} />
          <Title>b-inder</Title>
          <Genres data={data} loadSlider={loadSlider} />
        </div>
      )
        : (
          <div>
            <Login login={login} enterLogin={enterLogin} />
            <Title>b-inder</Title>
            <Box>
              <NewLogin />
              <SignIn />
            </Box>
            <Genres data={data} loadSlider={loadSlider} />
          </div>
        )}
    </div>
  );
};

export default App;
