import React, { useState } from 'react';
import styled from 'styled-components';

const Box2 = styled.div`
    display: flex; 
    justify-content: right;
`;

const Signin = styled.button`
    text-align: right;
    background-color: #70af85;
    font-family: 'bungee';
    font-size: 25px;
    color: #FCF8E8;
    border: 2px #70af85; 
    border-radius: 5px;
    width: auto; 
    cursor:pointer; 
`;

const Login = () => (
  <Box2>
    <Signin>Login</Signin>
  </Box2>
);

export default Login;
