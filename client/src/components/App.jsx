import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import LoginModal from './LoginModal';
import UpperHeader from './UpperHeader';
import SignInContainer from './SignInContainer';
import CenterContainer from './CenterContainer';

const axios = require('axios');

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCF8E8;
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

const App = () => {
  const [login, enterLogin] = useState(false);
  const [data, setData] = useState([]);
  const [user, changeUser] = useState('');
  const [userid, updateUserid] = useState(0);
  const [userpw, updateUserPW] = useState('');
  const [userBooks, changeUserBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [list, setList] = useState(false);

  const loadSlider = (genre) => {
    axios.get(`api/books/${genre}`)
      .then((response) => {
        // filter data with only those that have volumeinfo
        const books = response.data.filter(
          (book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail,
        );

        setData(books);
      })
      .catch((error) => {
        console.log(error, 'loadslider unable to be retrieve');
      });
  };

  const loadUserInfo = (username, pw) => {
    axios.get(`api/user/${username}/${pw}`)
      .then((response) => {
        changeUserBooks(response.data);
        updateUserid(response.data[0].id);
      })
      .then(changeUser(username))
      .then(updateUserPW(pw))
      .then(enterLogin(true))
      .catch((error) => {
        console.log(error, 'userinfo unable to be retrieved');
      });
  };

  const saveBookInfo = (bookData) => {
    axios.post(`/api/${userid}/books/storeInfo`, bookData)
      .then(() => {
        loadUserInfo(user, userpw);
      })
      .catch((error) => {
        console.log(error, 'could not save book');
      });
  };

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div>
      <GlobalStyle />
      {modal
        ? (
          <LoginModal
            modal={modal}
            setModal={setModal}
            changeModal={handleClick}
            login={login}
            enterLogin={enterLogin}
            loadUserInfo={loadUserInfo}
          />
        )
        : null}
      {login ? (
        <div>
          <UpperHeader
            login={login}
            enterLogin={enterLogin}
            loadUserInfo={loadUserInfo}
            modal={modal}
            setModal={setModal}
            list={list}
            setList={setList}
          />
          <CenterContainer
            data={data}
            loadSlider={loadSlider}
            saveBookInfo={saveBookInfo}
            userBooks={userBooks}
            user={user}
            list={list}
          />
        </div>
      )
        : (
          <div>
            <UpperHeader
              userBooks={userBooks}
              user={user}
              login={login}
              enterLogin={enterLogin}
              loadUserInfo={loadUserInfo}
              modal={modal}
              setModal={setModal}
            />
            <Title>b-inder</Title>
            <SignInContainer
              login={login}
              enterLogin={enterLogin}
              loadUserInfo={loadUserInfo}
              modal={modal}
              setModal={setModal}
            />
          </div>
        )}
    </div>
  );
};

export default App;
