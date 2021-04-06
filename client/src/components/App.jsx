import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import axios from 'axios';

import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import UpperHeader from './Header/UpperHeader';
import SignInContainer from './Header/SignInContainer';
import CenterContainer from './BookSection/CenterContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCF8E8;
    font-family: 'bungee';
    color: #433D3C;
  }
  button {
    font-family: 'bungee';
    font-size: 1.5vw;
    width: auto; 
    cursor:pointer; 
    background-color: #83A95C;
    border: 2px; 
    border-radius: 5px;
    &:hover {
      font-weight: 900;
      background-color: #ff6c60;
      box-shadow: 5px 5px 3px rgba(black, 0.25);
    }
  }
`;

function blinkingEffect() {
  return keyframes`
    50% {
      color: #ffd66b;
      box-shadow: 3px 3px 2px rgba(black, 0.15);
    }
  `;
}

const Title = styled.h1`
    font-size: 7vw; 
    text-align: center;
    color: #f18c8e;
    margin-bottom: 20px;
    animation: ${blinkingEffect} 7s linear infinite;

`;

const SubTitle = styled.h3`
    font-size: 1vw; 
    text-align: center;
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
  const [profile, showProfile] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [failMsg, setFailMsg] = useState(false);

  const loadUserBooks = (userData) => {
    axios.get(`api/${userData.user}/${userData.pw}/info`)
      .then((response) => {
        changeUserBooks(response.data);
      })
      .catch((error) => {
        console.log(error, 'userbooks unable to be retrieved');
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

  const saveNewUser = (newInfo) => {
    return axios.post('/api/user/new', newInfo)
      .then(() => {
        loadUserInfo(newInfo);
      })
      .catch((error) => {
        setFailMsg(true);
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
            user={user}
            profile={profile}
            showProfile={showProfile}
          />
          <CenterContainer
            data={data}
            saveBookInfo={saveBookInfo}
            userBooks={userBooks}
            user={user}
            list={list}
            profile={profile}
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
            <SubTitle>a quick book search for those with little time</SubTitle>
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
