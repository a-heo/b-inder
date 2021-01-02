import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import NewLogin from './NewLogin';
import SignIn from './SignIn';
import Genres from './Genres';

const axios = require('axios');

const Body = styled.div`
    background-color: #FCF8E8;
    display: flex;
    flex-direction: column;
    font-family: 'bungee';
    color: #433D3C;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    font-family: 'bungee';
    font-size: 125px; 
    text-align: center;
    color: #f18c8e;
`;

const Box = styled.div`
    display:flex; 
    justify-content: center;
`;

const App = () => {
  const [login, enterLogin] = useState(true);
  const [data, setData] = useState([]);

  const loadSlider = (genre) => {
    axios.get(`api/books/${genre}`)
      .then((response) => {
        // filter data with only those that have volumeinfo
        const books = response.data.filter((book) =>
          book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail);
        setData(books);
      })
      .catch((error) => {
        console.log(error, 'loadslider unable to be retrieve');
      });
  };

  return (
    <div>
      {login ? (
        <Body>
          <Login />
          <Title>b-inder</Title>
          <Genres data={data} loadSlider={loadSlider} />
        </Body>
      )
        : (
          <Body>
            <Login />
            <Title>b-inder</Title>
            <Box>
              <NewLogin />
              <SignIn />
            </Box>
            <Genres data={data} loadSlider={loadSlider} />
          </Body>
        )}
    </div>
  );
};

export default App;
