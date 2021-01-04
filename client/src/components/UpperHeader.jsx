import React from 'react';
import styled from 'styled-components';

import CheckList from './CheckList';
import Login from './Login';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #83a95c;
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
          <CheckList list={list} setList={setList} />
          <Login
            login={login}
            enterLogin={enterLogin}
            loadUserInfo={loadUserInfo}
            modal={modal}
            setModal={setModal}
          />
        </Header>
      )
      : (
        <Header>
          <Login
            login={login}
            enterLogin={enterLogin}
            loadUserInfo={loadUserInfo}
            modal={modal}
            setModal={setModal}
          />
        </Header>
      )}
  </div>

);

export default UpperHeader;
