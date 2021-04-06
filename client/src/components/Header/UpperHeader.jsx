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
  width: 20%;
`;

const LogoButton = styled.button`
  border-radius: 90px;
  cursor: pointer;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */

  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
span {
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
  margin: 0 10px;
}
  font-size: 1.5vw;
  color: #f18c8e;
  animation: ${blinkingEffect} 7s linear infinite;
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
          <Logo>
            <LogoButton onClick={() => {setList(false)}}>
            B-INDER
            </LogoButton>
          </Logo>
          <Menu>
            <Profile enterLogin={enterLogin} setList={setList} />
            {/* <CheckList list={list} setList={setList} />
            <Login
              login={login}
              enterLogin={enterLogin}
              loadUserInfo={loadUserInfo}
              modal={modal}
              setModal={setModal}
            /> */}
          </Menu>
        </Header>
      )
      : (
        <Header>
          <Logo>
            <LogoButton onClick={() => {setList(false)}}>
            B-INDER
            </LogoButton>
          </Logo>
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
