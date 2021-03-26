import React from 'react';
import styled, { keyframes } from 'styled-components';

import CheckList from './CheckList';
import Login from './Login';
import Profile from './Profile';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  ${'' /* justify-content: flex-end; */}
  background-color: #83a95c;
`;

function blinkingEffect() {
  return keyframes`
    50% {
      color: #ffd66b;
      box-shadow: 3px 3px 2px rgba(black, 0.15);
    }
  `;
}

const Logo = styled.div`
  justify-content: flex-start;
  font-size: 1.5vw;
  color: #f18c8e;
  animation: ${blinkingEffect} 7s linear infinite;
  width: 20%;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const UpperHeader = ({
  list,
  setList,
  login,
  enterLogin,
  loadUserInfo,
  modal,
  setModal,
}) => (
  <div>
    {login
      ? (
        <Header>
          <Logo>B-INDER</Logo>
          <Menu>
            <Profile />
            <CheckList list={list} setList={setList} />
            <Login
              login={login}
              enterLogin={enterLogin}
              loadUserInfo={loadUserInfo}
              modal={modal}
              setModal={setModal}
            />
          </Menu>
        </Header>
      )
      : (
        <Header>
          <Logo>B-INDER</Logo>
          <Menu>
            <Login
              login={login}
              enterLogin={enterLogin}
              loadUserInfo={loadUserInfo}
              modal={modal}
              setModal={setModal}
            />
          </Menu>
        </Header>
      )}
  </div>

);

export default UpperHeader;
