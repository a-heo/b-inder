import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
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
    font-size: 2vw;
    width: auto; 
    cursor:pointer; 
    background-color: #83A95C;
    border: 2px; 
    border-radius: 5px;
    &:hover {
      font-weight: 900;
      background-color: #ff6c60;
    }
  }
`;

const Title = styled.h1`
    font-size: 10vw; 
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
  const [signupModal, setSignupModal] = useState(false);
  const [failMsg, setFailMsg] = useState(false);

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

  const loadUserBooks = (userData) => {
    axios.get(`api/${userData.user}/${userData.pw}/info`)
      .then((response) => {
        changeUserBooks(response.data);
      })
      .catch((error) => {
        console.log(error, 'userbooks unable to be retrieved');
        setFailMsg(!failMsg);
      });
  };

  const loadUserInfo = (userData) => {
    axios.get(`api/${userData.user}/${userData.pw}/id`)
      .then((response) => {
        updateUserid(response.data[0].id);
      })
      .then(changeUser(userData.user))
      .then(updateUserPW(userData.pw))
      .then(enterLogin(true))
      .then(loadUserBooks(userData))
      .catch((error) => {
        console.log(error, 'userinfo unable to be retrieved');
        setFailMsg(!failMsg);
      });
  };

  const saveBookInfo = (bookData) => {
    axios.post(`/api/${userid}/books/storeInfo`, bookData)
      .then(() => {
        const userData = {};
        userData.user = user;
        userData.pw = userpw;
        loadUserBooks(userData);
      })
      .catch((error) => {
        console.log(error, 'could not save book');
      });
  };

  console.log(userBooks);
  const saveNewUser = (newInfo) => {
    axios.post('/api/user/new', newInfo)
      .then(() => {
        loadUserInfo(newInfo);
      })
      .catch((error) => {
        console.log(error, 'user exists or could not be saved');
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
      {signupModal
        ? (
          <SignUpModal
            signupModal={signupModal}
            setSignupModal={setSignupModal}
            saveNewUser={saveNewUser}
            failMsg={failMsg}
            setFailMsg={setFailMsg}
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
              signupModal={signupModal}
              setSignupModal={setSignupModal}
            />
          </div>
        )}
    </div>
  );
};

export default App;
