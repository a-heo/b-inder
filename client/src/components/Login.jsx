import React, { useState } from 'react';
import styled from 'styled-components';

const Box2 = styled.div`
    display: flex;
    justify-content: right;
    text-align: right; 
`;

const Signin = styled.button`
    justify-content: right;
    align-items: right;
    text-align: right;
    background-color: #70af85;
    color: #FCF8E8;
    border: 2px #70af85; 
    border-radius: 5px;
`;

const Login = () => (
  <Box2>
    <Signin>Login</Signin>
  </Box2>
);

export default Login;
