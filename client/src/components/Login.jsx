import React, { useState } from 'react';
import styled from 'styled-components';

const Box2 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: right; 
`;

const LogButton = styled.button`
    justify-content: right;
    align-items: right;
    text-align: right;
    background-color: #70af85;
    margin-left: 1vw;
    color: #FCF8E8;
    border: 2px #70af85; 
    border-radius: 5px;
`;

const Login = ({
  login, enterLogin, loadUserInfo, modal, setModal,
}) => (
  <div>
    {login
      ? (
        <Box2>
          <LogButton onClick={() => { enterLogin(false); }}>Logout</LogButton>
        </Box2>
      )
      : (
        <Box2>
          <LogButton onClick={() => setModal(!modal)}>Login</LogButton>
        </Box2>
      )}
  </div>
);

export default Login;
